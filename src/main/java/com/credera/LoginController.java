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
	@Autowired
	private LoginService loginService;
	
	// Maps a url after podsurfer-g4.herokuapp.com,
	// so here its podsurfer-g4.herokuapp.com/loginAPI
	// This also sets up for it to receive via POST
	@RequestMapping(value = "/loginAPI", method = RequestMethod.POST, headers="Accept=application/json")
	@ResponseBody
	public String loginUserToCredera(@RequestBody LoginRequest loginRequest)
	{
		String email = loginRequest.getEmail();
		String password = loginRequest.getPassword();
		
		// Debug output email and password for testing
		System.out.println(email);
		System.out.println(password);
		
    	// URL to Credera API - Login Existing User POST
    	final String uri = "https://podsurfer-4.herokuapp.com/auth/local/";
    	
    	// Setup some parameter mapping for the API parameters
    	MultiValueMap<String, String> loginParameters = new LinkedMultiValueMap<String, String>();
    	loginParameters.add("email", email);
    	loginParameters.add("password", password);
    	
    	// Declare a Rest Template to Post to the Credera API
    	RestTemplate restTemplate = new RestTemplate();
		
    	// POST Statement function from the restTemplate
    	// It stores the token in result and sends it back as a string
    	String result = restTemplate.postForObject(uri, loginParameters, String.class);

    	return result;
	}   
}