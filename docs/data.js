
burgerdata = {
        filters:{ Toasted:true, Bacon:true, Tomatoes:true, Onions:true, Jalapenos:true, Mustard:true, Relish:true, Catsup:true },
        variables:{ Cheese:"Swiss", Greens:"Letuce", Beer:"Corona" }
    };

burgerdoc = [{txt:"<h3 style=\"text-align:center;\">Hello! I'm going to tell you how to make my favorite burger.</h3>"},
{txt:"<table style=\"width:100%\"><tr><th>Hot Items</th><th>Cold Items</th><th>Sauces</th><th>Beer</th></tr><tr><td>Hamburger patty"},
{and:["Bacon"],txt:", Bacon"},
{and:["Jalapenos"],txt:", Jalapenos"},
{and:["Toasted"],txt:", Toasted Buns, "},
{var:"Cheese"},
{txt:" Cheese"},
{txt:"</td><td>"},
{var:"Greens"},
{and:["Tomatoes"],txt:", Tomatoes"},
{and:["Onions"],txt:", Onions"},
{not:["Toasted"],txt:", Fresh Buns"},
{txt:"</td><td>"},
{and:["Mustard"],txt:"Mustard"},
{and:["Relish"],txt:", Relish"},
{and:["Catsup"],txt:", Catsup"},
{txt:"</td><td>"},
{var:"Beer"},
{txt:"</td></tr></table><br><br>"},
{txt:"The first thing you need to do is get some ground beef or pork and add some seasonings to it. I would recommend some salt and fresh ground pepper at least but there are many choices if you want to add more flavor. You also want to make sure that the meat is not too lean. A decent fat content is good if you are cooking over fire, since the fat and juices will drip down over the fire and create a great flavor as it heats up and smoke condenses over the cooking meat.<br><br>After mixing the spices into the ground meat, you can begin forming balls out of decent sized portions of it and smashing them into burgers.<br><br>Make sure your fire is hot. As the Grating on your grill heats up, put half an onion on a large fork and use the juices to coat the grating. That will help to clean it and also give a great aroma and flavor to the meat.<br><br>Now you can begin putting the burgers on the grill. Make sure to flip them periodically and also check to make sure they are thoroughly cooked before removing them from the grill.<br><br>"},
{txt:"Slice your "},
{var:"Cheese"},
{txt:" cheese and place it on top of each burger while it is still hot so that it melts.<br><br>"},
{and:["Bacon"],txt:"<span>When you add bacon to your burger, I would recommend putting it on top of the cheese. It is important to put all the hot items together and then put the cold items last. This will help ensure that each ingredient tastes its best.</span><br><br>"},
{and:["Jalapenos"],txt:"<span>Ok, one more hot ingredient. I recommend using fresh Jalapenos, not the ones in vinegar. The difference is amazing! Just slice them long-ways and scoop out the seeds so they are not too hot. Then place them on the grill until they are roasted. Place those on top of your hot items.</span><br><br>"},
{txt:"Now, you're going to need buns. If you don't have buns then you're in a heap of trouble, for sure."},
{and:["Toasted"],txt:" <span>Now, assuming you do have them, you need to toast them. To do that, you need to butter them and put them face-down on a hot griddle until they are just the way you like them.</span>"},
{txt:"<br><br>Now you can start stacking your burger and other ingredients on a bun.<br><br>"},
{txt:"<h3 style=\"text-align:center;s\">Salad and Sauces</h3>"},
{txt:"Now it's time for the cold items."},
{txt:"You should place some "},
{var:"Greens"},
{txt:" on your burger. "},
{and:["Tomatoes"],txt:"<span>Slice tomatoes and place them on top. But I would recommend not letting them come into contact with the bun since it can lead to a soggy burger.</span>"},
{and:["Onions"],txt:" <span>Add thinly sliced onion.</span>"},
{or:["Mustard","Relish","Catsup"],txt:" <span>Now add your sauces like</span>"},
{and:["Mustard"],txt:" <span> Mustard</span>"},
{and:["Relish"],txt:" <span>, Relish</span>"},
{and:["Catsup"],txt:" <span>, Catsup</span>"},
{txt:" ...and then just place the bun on top.<br><br><br>"},
{txt:"Just one more thing to make this complete. You may want a good beer, so go ahead and grab you a "},
{var:"Beer"},
{txt:" and a cold mug."}]; // article

// set Burger as default for now.
data = burgerdata;
doc = burgerdoc;
