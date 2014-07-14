$("//div[@id='SearchForm']/form//input[@type='image']") {
  wrap("div", class: "mw_search_btn sprites-search")
  attribute("style", "opacity:0;")
}


$(".//div[@id='Header']") {
	attribute("data-ur-set", "toggler")
	$("./div[@id='Logo']") {
	  # Move top menu into #Logo container
	  move_here("../../../div[@id='TopMenu']", "bottom") {
	    # Remove unwanted top menu items from upper menu
	    remove(".//li[not(contains(@class, 'CartLink') or contains(@class, 'First'))]")
	  }
	}

	# Insert HTML for bottom of header
	insert("div", class: "mw_header_bottom") {
	  insert("div", class: "mw_search")
	  insert("div", class: "mw_menu_btn sprites-menu", data-ur-toggler-component: "button")
	}

	# Fill search HTML
	$("..//div[@class='mw_search']") {
	  # Move search form into container element
	  move_here("//div[@id='SearchForm']", "bottom") {
	    remove("./p")
	 
	    $("./form") {
	      remove("./label")
	      # Change search button background image
	      $("./input[@type='image']") {
	        wrap("div", class: "mw_search_btn sprites-search")
	      }
	      $("./input[@type='text']") {
	        attribute("placeholder", " Search...")
	      }
	    }
	  }
	}

	# Adding Sprite Classes to header elements
	$(".//li[@class='CartLink']/a") {
		wrap("div",class:"sprites-cart")
		attribute("style", "opacity:0;")
	}

	$(".//li[@class='First']/a") {
		wrap("div",class:"sprites-user")
		attribute("style", "opacity:0;")
	}
}


$("//div[@id='SideCategoryList']") {
	attribute("data-ur-toggler-component", "content")
	move_to("//div[@id='Header']", "bottom")
}

$("body"){
$(".//div[contains(@class, 'Content')]") {
	$(".//div[@id='HomeFeaturedProducts']") { 
		$("./div") { 
			attribute("data-ur-set", "carousel")
			attribute("data-ur-fill", "1")
			attribute("data-ur-carousel-component", "view_container")
			attribute("data-ur-autoscroll", "enabled")
			attribute("data-ur-autoscroll-delay", "5000")
			attribute("data-ur-id", "FeaturedProductsCarousel")
			$("./ul") { 
			attribute("data-ur-carousel-component", "scroll_container")
				$$(".Odd") { 
				attribute("data-ur-carousel-component", "item")
				} 
				$$(".Even") { 
				attribute("data-ur-carousel-component", "item")
				} 
			} 
			insert("div",class:"carousel_navigation"){
				#insert("span",data-ur-carousel-component:"count","-- count --")
				insert("div",class:"Previous",data-ur-carousel-component:"button",data-ur-carousel-button-type:"prev","Back")
				insert("div",class:"Next",data-ur-carousel-component:"button",data-ur-carousel-button-type:"next","Forward")
				insert("div",class:"Dots",data-ur-carousel-component:"dots")
			}
		insert("hr") 	
		} 
	}
}		
}