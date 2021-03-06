class CategoriesController < ApplicationController
    def index
        categories = category.all
        render json: categories, status: :ok
    end

    def show
        category = Category.find(params[:id])
        render json: category, status: :ok
    end
end
