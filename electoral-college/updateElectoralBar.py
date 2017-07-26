# begin 0
def update_electoral_bar():
# end 0 

# begin 1
	for state in map.united_states:
# end 1 

# begin 2
		if current_color = 'red':
# end 2

# begin 3
			rep_total += state.votes
			break
# end 3

# begin 4
		elif current_color = 'blue':
# end 4 

# begin 5
			dem_total += state.votes
			break
# end 5

# begin 6
		else:
# end 6

# begin 7 
			neutral_total += state.votes
			break
# end 7

# begin 8
	update_bar_width('rep')
	update_bar_width('dem')
# end 8