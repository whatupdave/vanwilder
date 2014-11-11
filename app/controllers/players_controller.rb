class PlayersController < ApplicationController
  def show
    @player = {username: params[:id]}
  end
end
