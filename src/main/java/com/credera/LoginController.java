/*package com.credera;

@Controller
public class LoginController { 

	@RequestMapping("/loginAPI")
	public String testRequestParam(
	    @RequestParam(value = "email", required = false) String emailValue,
        @RequestParam(value = "password") String passwordValue,
        Model model
    ) {
        model.addAttribute("data1", "We have some data passed to our view!");

        // SETUP A loginService TO CALL TO THE API the function will be called
        // login
		String userLoginToken = loginService.login(emailValue, passwordValue);
		
		model.addAttribute("userLoginToken", userLoginToken);
		
		// WUT IF THE LOGIN TOKEN DOES NOT RETURN, WHAT HAPPENS
		
		// WHAT DO I RETURN HERE???
		return "test";
	}
	
    // WHAT IS THIS????
	@RequestMapping("/loginAPI/{emailValue}/{passwordValue}")
	public String testPathVariable(@PathVariable String emailValue, @PathVariable String passwordValue, HttpServletRequest request, HttpServletResponse response, Model model) {
		
		String userLoginToken = loginService.login(emailValue, passwordValue);
		
		model.addAttribute("userLoginToken", userLoginToken);
		return "examples/test2";
	}

    // WHAT IS THIS???
	@ResponseBody
	@RequestMapping(value = "/testJson", method = RequestMethod.POST)
	public BarResponse testJson(@RequestBody BarRequest request) {
		return barService.bar(request);
	}

    // WHAT IS THIS???
	@ResponseBody
	@RequestMapping(value = "/testJson2", method = RequestMethod.POST)
	public BarResponse testJson() {
		return new BarResponse(Lists.newArrayList("one", "two", "three"), Maps.newHashMap());
		
	}

    
    
}*/