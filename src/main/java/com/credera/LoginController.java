package com.credera;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.converter.FormHttpMessageConverter;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.util.LinkedMultiValueMap;
// RestTemplate
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

/*
import com.credera.BarService.BarRequest;
import com.credera.BarService.BarResponse;
*/

import com.credera.LoginService.LoginRequest;
import com.credera.LoginService.LoginResponse;

@Controller
public class LoginController { 
/*
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
	}*/
	
	
	@Autowired
	private LoginService loginService;
	
	// Maps a url after podsurfer-g4.herokuapp.com,
	// so here its podsurfer-g4.herokuapp.com/loginAPI
	// This also sets up for it to receive via POST
	@RequestMapping(value = "/loginAPI", method = RequestMethod.POST, headers="Accept=application/json")
	@ResponseBody
	public String loginUserToCredera(
		@RequestBody String emailAndPasswordRequest
		/*HttpServletRequest request,
	    // value is the parameter name in the url
	    @RequestParam(value="email") String email,
	    @RequestParam(value="password") String password*/
	   /*String email, String password*/
    )
	{
		// This is a very bad way of doing this. I need to figure out how to just
		// immediately grab the JSON obkect
		String [] tokens = emailAndPasswordRequest.split("\"");
		String email = tokens[3];
		String password = tokens[7];
		
		// Debug email and password
		System.out.println(email);
		System.out.println(password);
		
    	// URL to Credera API - Login Existing User POST
    	final String uri = "https://podsurfer-4.herokuapp.com/auth/local/";
    	
    	// Setup some parameter mapping for the API parameters
    	MultiValueMap<String, String> loginParameters = new LinkedMultiValueMap<String, String>();
    	loginParameters.add("email", email);
    	loginParameters.add("password", password);
    	
    	RestTemplate restTemplate = new RestTemplate();
    	/*HttpMessageConverter formHttpMessageConverter = new FormHttpMessageConverter();
		HttpMessageConverter stringHttpMessageConverternew = new StringHttpMessageConverter();*/
		/*restTemplate.setMessageConverters(new HttpMessageConverter[]{formHttpMessageConverter, stringHttpMessageConverternew});*/
		
    	String result = restTemplate.postForObject(uri, loginParameters, String.class);
    	/*LoginRequest result = restTemplate.postForObject (uri, newLoginRequest, LoginRequest.class);*/
    	//LoginRequest result = new LoginRequest(request.getParameter("email"), request.getParameter("password"));

    	
    	return result;
	}
	
	
	
	// OLD CRAZY COMMENTS AND STUFF BELOW

	/*@ResponseBody
	// At the url we mapped, we can create a LoginRequest object from the parameters
	// that are passed. Below, we define the two parameters
	public LoginRequest createLoginRequest(
    	            // value is the parameter name in the url
	    @RequestParam(value="email") String email,
	    @RequestParam(value="password") String password
    )
	{		
    	// Create a new LoginRequest object form the parameters passed and return
    	// the object as JSON (all you have to do is return and it knows it is
    	// JSON
    	return new LoginRequest(email, password);
    	// REST TEMPLATE: give it URL & call POST, GET, etc.
	}
	*/
	
	// An URL calls to this function are:
	// podsurfer-g4.herokuapp.com/loginAPI?email=timarterbury@gmail.com&password=Lolz254@
	//           ? means begin parameters ^ email is first parameter    password is second
	//           & means begin next parameter 
	
	
	
	
	
	
	
	
	// ALTERNATIVE WITH MODEL, WHAT IS MODEL????
	/*
	@Autowired
	private LoginService loginService;
	
	@RequestMapping("/loginAPI")
	@ResponseBody
	public String createLoginRequest(
    	            // value is the parameter name in the url
	    @RequestParam(value="email") String email,
	    @RequestParam(value="password") String password,
	    Model model
    )
	{
    	model.addAttribute("email", "AHSHSHDHDHSKHSD");
    	String loginServiceString = loginService.foo(email, password);
    	return loginServiceString;
	}*/
	
	
	
	// THIS IS THE LEGIT STUFF
	/*
	@RequestMapping("/loginAPI/{emailValue}/{passwordValue}")
	@ResponseBody
	public String testPathVariable(
	    @PathVariable String emailValue,
	    @PathVariable String passwordValue,
	    HttpServletRequest request,
	    HttpServletResponse response,
	    Model model
    ) {
		
		/*
		String userLoginToken = loginService.login(emailValue, passwordValue);
		
		model.addAttribute("serviceResult", userLoginToken);
		return "examples/test2";
		*/
		/*
		return "lol it works????" + emailValue + passwordValue;
	}
	*/

/*
    // WHAT IS THIS???
	@ResponseBody
	
	@RequestMapping(value = "/testJson", method = RequestMethod.GET)
	public String getLoginToken(Model model) {
		model.addAttribute("token", )
		return barService.bar(request);
	}

    // WHAT IS THIS???
	@ResponseBody
	@RequestMapping(value = "/testJson2", method = RequestMethod.POST)
	public BarResponse testJson() {
		return new BarResponse(Lists.newArrayList("one", "two", "three"), Maps.newHashMap());
		
	}
	*/

    
    
}