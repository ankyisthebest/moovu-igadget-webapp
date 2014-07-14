$("./body") {
  add_class("mw_category")
   
  $("./div[@id='Container']/div[@id='Outer']") {
    $("./div[@id='Wrapper']") {
 
      $("./div[@class='Left']") {
        # Create Togglers
        $("./div[@id='SideShopByBrand' or @id='SideCategoryShopByPrice']") {
          attribute("data-ur-set", "toggler")
          $("./h2") {
            attribute("data-ur-toggler-component", "button")
            insert("div", class: "mw_indicator")
          }
          $("./div") {
            attribute("data-ur-toggler-component", "content")
            $(".//li/a") {
              insert("div", class: "mw_arrow")
            }
          }
        }
                $(".//div[contains(@class, 'NewsletterSubscription')]") {
          remove()
        }
      }
    }
  }   
 } 