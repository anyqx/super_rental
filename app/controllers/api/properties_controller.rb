class Api::PropertiesController < ApplicationController
    def index
        @properties = Property.all
        render 'api/properties/index'
    end

    def show
        @property = Property.find_by(id: params[:id])
        render :show
    end


end
