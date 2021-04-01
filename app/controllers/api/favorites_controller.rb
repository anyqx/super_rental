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
            @favorite = Favorite.new(user_id: current_user.id, property_id: property_id)
            if @favorite.save
                redirect_to action: 'index'
            else
                render json: ["sorry! can not favorite this item!"], status:422
            end
        end
    end

    def destroy
        if logged_in?
            @unfavorite = Favorite.find_by(user_id: current_user.id, property_id: property_id)
            @unfavorite.destroy
            @favorites = current_user.favorites
            render :index
        else
            render json:["This Property is not one of your favorites!"], status:422
            require_login
        end
            
    


end
