class DosesController < ApplicationController
  # def new
  #   @cocktail = Cocktail.find(params[:cocktail_id])
  #   @dose = Dose.new
  # end

  def create
    @dose = Dose.new(doses_params)
    @cocktail = Cocktail.find(params[:cocktail_id])
    @dose.cocktail = @cocktail
    if @dose.save
      redirect_to cocktail_path(@cocktail)
    else 
      render 'cocktails/show'
    end 
  end

  # def show
  #   @cocktail = 
  #   @dose = Dose.find()
  # end 

  def destroy
    @dose = Dose.find(params[:id])
    @cocktail = @dose.cocktail
    @dose.delete
    redirect_to cocktail_path
  end

  private 

  def doses_params
    params.require(:dose).permit(:description, :ingredient_id)
  end
end
