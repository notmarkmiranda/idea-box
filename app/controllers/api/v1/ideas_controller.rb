class Api::V1::IdeasController < Api::ApiController
  respond_to :json

  def index
    respond_with Idea.all
  end

  def show
    respond_with Idea.find(params[:id])
  end

  def create
    respond_with Idea.create(idea_params)
  end

  def destroy
    respond_with status: 204 if Idea.delete(params[:id])
  end

  def update
    @idea = Idea.find(params[:id])
    if params[:qualityUpdate] &&
      !((@idea.genius? && params[:qualityUpdate] == "1")|| (@idea.swill? && params[:qualityUpdate] == "-1"))
      @idea.increment!(:quality, params[:qualityUpdate].to_i)
      # MOVE TO MODEL
    end
    respond_with @idea if @idea.update(idea_params)
  end

  private
    def idea_params
      params.permit(:title, :body, :quality)
    end
end
