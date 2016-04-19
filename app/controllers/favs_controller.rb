class FavsController < ApplicationController
  def create
    @fav = Fav.new(fav_params)
    @fav.user = current_user
    if @fav.save
      flash[:notice] = "Such tasty cheese."
    else
      flash.now[:notice] = "Failed to fav."
    end
  end

  private
  def fav_params
    params.require(:fav).permit(:cheese_id, :user_id)
  end

end
