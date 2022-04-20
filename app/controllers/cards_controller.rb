class CardsController < ApplicationController
    def index
        cards = Card.all
        render json: cards, status: :ok
    end

    def show
        cards = Card.find(params[:id])
        render json: card, status: :ok
    end

    def create
        cards = Card.create!(card_params)
        render json: card, status: :created
    end

    def update
        cards = Card.find(card_params[:id])
        render json: card, status: :accepted
    end

    def destroy
        cards = Card.find_by(id: params[:id])
        post.destroy!
        render json: {}, status: :deleted
    end

    private
    def card_params
        params.permit(:id, :owner, :notes, :user_id, :category_id, :image)
end
