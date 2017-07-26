	# begin 0
	def click_state(state):
	# end 0


	# begin 1 
	    new_color = change_color(current_color)
	    current_color = new_color;
	# end 1


	# begin 2
	    if new_color == 'blue':
	# end 2

	# begin 3
	        rep_vote = 0.49
	        slider.value = 49
	# end 3


	# begin 4
	    elif new_color == 'red':
	# end 4

	# begin 5
	        rep_vote = 0.51
	        slider.value = 51
	# end 5


	# begin 6
	    else: 
	# end 6

	# begin 7
	        rep_vote = 0.50
	        slider.value = 50
	# end 7


	# begin 8
	    update_electoral_bar()
	    update_popular_bar()
	# end 8