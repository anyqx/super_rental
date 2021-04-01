class Api::CartitemsController < ApplicationController
    def index
        if current_user
            @cartitems = current_user.cartitems
            render 'api/cartitems/index'
        end
    end

    # def show
    #     if current_user
    #         property_id = params[:id].to_i
    #         @price = CartItem.find_by(user_id: current_user.id, property_id: property_id)
    #         render :show;
    #     end
    # end
    
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
            if @cartitem.update(cartitem_params)
                @cartitems = CartItem.all.select{ |item| item.user_id == current_user.id }
                render :index
            else
                render json: @cartitem.errors.full_messages, status: 404
            end
        else  
            require_login
        end
    end

    def destroy
        if logged_in?
            @cartitem = current_user.cartitems.find_by(id: params[:id])
            # debugger
            @cartitem.destroy
            @cartitems = current_user.cartitems
            render :index
        else
            require_login
        end
            
    end

    private

    def cartitem_params
        params.require(:cartitem).permit(:property_id, :user_id, :price, :terms)
    end
end
