class Api::FavoritesController < ApplicationController
    def index
        if !current_user 
            render json: ["User not logged in"]
        else
            @favorites = current_user.favorites
            render 'api/favorites/index'
        end

    end

    def create
        if !current_user 
            render json: ["User not logged in"]
        else
            # property_id = params[:propertyId].to_i
            @favorite = Favorite.new(favorite_params)
            if @favorite.save
                redirect_to action: 'index'
            else
                render json: ["sorry! can not favorite this item!"], status:422
            end
        end
    end

    def destroy
        if logged_in?
            @favorite = current_user.favorites.find_by(id: parmas[:id])
            @favorite.destroy
            @favorites = current_user.favorites
            render :index
        else
            render json:["This Property is not one of your favorites!"], status:422
            require_login
        end
    end

    private

    def favorite_params
        params.require(:favorite).permit(:property_id, :user_id)
    end
end
