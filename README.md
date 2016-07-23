# Summary
A public redistricting platform for North Carolina.

The platform would provide citizens a way to contribute new district plans:
 * A user registration process. Registered users can add/modify new redistricting plans.
 * Users could pick 13 regions (anchors), and the platform would generate a set of districts for North Carolina. This is based on [A RASTER-BASED NETWORK ANALYST GIS APPROACH TO REDISTRICTING IN NORTH CAROLINA](http://www.url.com).
 * The application would score every submitted redistricting plan based on the criteria laid out in [S1093](http://www.ncga.state.nc.us/gascripts/BillLookUp/BillLookUp.pl?Session=2007&BillID=s1093&submitButton=Go).
 * The application would show a roster of top scoring redistricting plans, with possibly some relevant statistical information about the map, its score, and how the score is computed.

----

Screens:
 * Welcome: The main landing page for the application. Provides a summary
   of the service, and links to register, login, and view the rankings.
 * Login: A series of prompts to let the user login, or reset their password.
 * New user: A form to initiate a plain email registration or OAuth
   (gmail/facebook, eg)
 * Rankings: Listing of top ranked redistricting plans.
 * Personal Rankings: Listing of a specific user's plans and their scores.
 * New Redistricting: A map of NC, and ability to modify up to 13 anchor points
   and submit the anchor points to generate a new redistricting map.
 * District Score: A detailed view of a redistricting map, and its score.
