class CardsController < ApplicationController
    def index
        if params[:category_id]
            category = Category.find(params[:category_id])
            cards = category.cards
        else
        cards = Card.all
        end
        render json: cards, status: :ok
    end

    def show
        card = Card.find(params[:id])
        render json: card, status: :ok
    end

    def create
        card = Card.create!(card_params)
        render json: card, status: :created
    end

    # def update
    #     cards = Card.find(card_params[:id])
    #     render json: card, status: :accepted
    # end

    def destroy
        cards = Card.find_by(id: params[:id])
        post.destroy!
        render json: {}, status: :deleted
    end

    private
    def card_params
        params.permit(:id, :owner, :notes, :user_id, :category_id, :image)
    end
end
