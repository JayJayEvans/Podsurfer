package com.credera;

import org.springframework.stereotype.Service;



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