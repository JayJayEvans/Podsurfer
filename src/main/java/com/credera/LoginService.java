package com.credera;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.google.common.collect.Lists;
import com.google.common.collect.Maps;



@Service
public class LoginService
{
    
    public static class LoginRequest
    {
        private String email;
        private String password;
        
        public LoginRequest() {
        	this.email = "";
        	this.password = "";
        }
        
		public LoginRequest(String email, String password) {
			this.email = email;
			this.password = password;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
    }
    
    
    public static class LoginResponse
    {
        private String token;

		public LoginResponse(String token) {
			this.token = token;
		}

		public String getToken() {
			return token;
		}

		public void setToken(String token) {
			this.token = token;
		}
        
    }

}