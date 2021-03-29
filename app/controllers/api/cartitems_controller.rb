class Api::CartitemsController < ApplicationController
    def index
        # @cartitems = CartItem.all.select{|item| item.user_id == current_user.id }
        if !current_user
            render :son => {}
        else
            @cartitems = current_user.cartitems
            # render 'api/cartitems/index'
            render :index;
    end

    def show
        if current_user
            property_id = prams[:id].to_i
            @price = CartItem.find_by(user_id: current_user.id, property_id: property_id)
            render :show;
        end
    end
    
    def create
        @cartitem = CartItem.new(cartitem_params)
        if @cartitem.save && logged_in?
            redirect_to action: 'index'
        else
            render json: @cartitem.errors.full_messages, status: 404
        end 
    end

    def update
       
        if logged_in?
            @cartitem = CartItem.find_by(id: params[:id])
            if @cartitem && (params[:increase] == 'true')
                @cartitem.price += get_price
                @cartitem.save
                @cartitems = CartItem.all.select{ |item| item.user_id == current_user.id }
                render :index
            else  
                if @cartitem.update(cartitem_params)
                    @cartitems = CartItem.all.select{ |item| item.user_id == current_user.id }
                    render :index
                else
                    render json: @cartitem.errors.full_messages, status: 404
                end
            end
        else  
            require_login
        end
        
    end

    def destroy
        if logged_in?
            @cartitem = CartItem.find_by(id: params[:id])
            @cartitem.destroy
            @cartitems = CartItem.all.select{ |item| item.user_id == current_user.id }
            render :index
        else
            require_login
        end
            
    end

    private

    def cartitem_params
        params.require(:cartitem).permit(:property_id, :user_id, :price, :terms)
    end

    def get_price
        params[:cartitem][:price].to_f
    end

    def get_terms
        params[:cartitem][:terms]
    end
end
