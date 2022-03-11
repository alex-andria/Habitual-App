class HabitsController < ApplicationController
    skip_before_action :authorize, only: :update
    
    def index
        render json: @current_user.habits
    end

    def show
        habit = Habit.find(params[:id])
        render json: habit
    end 
    
      def create
        habit = @current_user.habits.create!(habit_params)
        render json: habit, status: :created
      end



      def update
        habit = find_habit
        habit.update!(update_habit_params)
        render json: habit
      end

      def increment_goal_tracker
        habit = find_habit
        habit.increment!(:goal_tracker)
        render json: habit
      end

    #   def tracker_increment
    #     habit = Habit.find(params[:id])
    #     habit.increment_counter(:goal_tracker, params[:id])
    #   end

    #  def update
    #     habit = Habit.find(params[:id])
    #     habit.update!(habit_params)
    #     #habit = @current_user.habits.update!(habit_params)
    #     render json: habit, status: :created
    #  end

    #  def destroy
    #   # habit = Habit.find(params[:id])
    # end
    
    def destroy

      find_habit.destroy
      head :no_content

  end
  
      private
    
      def find_habit
        Habit.find(params[:id])
        end

      def habit_params
        params.permit(:habit_name, :goal_description, :goal_days, :user_id, :goal_tracker, :color_code)
      end
      
      def update_habit_params
        params.permit(:habit_name, :goal_description, :goal_days, :goal_tracker, :color_code)
      end

end
