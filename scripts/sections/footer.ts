$("./body") {
	insert("footer", "Powered by Moovweb", class: "mw-footer") {
		# Move stuff here
	}

	$("./div[@id='Footer']/p/a[1]") {
		insert_top("br") {

		}
		insert_top("br") {

		}
	}
}

