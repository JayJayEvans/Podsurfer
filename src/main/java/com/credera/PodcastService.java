package com.credera;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;


@Service
public class PodcastService
{

	/* Podcast Request to server */
	public class PodcastRequest 
	{
		// Member Variables
		private String authorization;
		
		private String name;
		private String link;
		private String release;
		private String producer;
		private String length;
		private String description;
		private String imageUrl;
		
		public PodcastRequest() {
			this.authorization = "";
			this.name = "";
			this.link = "";
			this.release = "";
			this.producer = "";
			this.length = "";
			this.description = "";
			this.imageUrl = "";
		}
		
		public PodcastRequest(String authorization, String name) {
			this.authorization = authorization;
			this.name = name;
		}
		
		public PodcastRequest(String authorization, String name, String link, String release, String producer, String length,
				String description, String imageUrl) {
			this.authorization = authorization;
			this.name = name;
			this.link = link;
			this.release = release;
			this.producer = producer;
			this.length = length;
			this.description = description;
			this.imageUrl = imageUrl;
		}
		
		public String getAuthorization() {
			return authorization;
		}
		
		public void setAuthorization(String authorization) {
			this.authorization = authorization;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getLink() {
			return link;
		}

		public void setLink(String link) {
			this.link = link;
		}

		public String getRelease() {
			return release;
		}

		public void setRelease(String release) {
			this.release = release;
		}

		public String getProducer() {
			return producer;
		}

		public void setProducer(String producer) {
			this.producer = producer;
		}

		public String getLength() {
			return length;
		}

		public void setLength(String length) {
			this.length = length;
		}

		public String getDescription() {
			return description;
		}

		public void setDescription(String description) {
			this.description = description;
		}

		public String getImageUrl() {
			return imageUrl;
		}

		public void setImageUrl(String imageUrl) {
			this.imageUrl = imageUrl;
		}
		
	}
	
	/* Podcast Response from server */
	public class PodcastResponse
	{
	    
	    // Member Variables
	    private int id;
	    private String name;
	    private String link;
	    private String release;
	    private String producer;
	    private String length;
	    private String description;
	    private List<Episode> episodes;
	    private List<String> tags;
	    private String imageUrl;
	
	    // Default Constructor
	    public PodcastResponse () {
	    	this.id = 0;
	    	this.name = "";
	    	this.link = "";
	    	this.release = "";
	    	this.producer = "";
	    	this.length = "";
	    	this.description = "";
	    	this.episodes = new ArrayList<Episode>();
	    	this.tags = new ArrayList<String>();
	    	this.imageUrl = "";		
	    }
	    
	    // Constructor
	    public PodcastResponse (int id, String name, String link,
	    String release, String producer, String length, String description,
	    List<Episode> episodes, List<String> tags, String imageUrl)
	    {
	        this.id = id;
	        this.name = name;
	        this.link = link;
	        this.release = release;
	        this.producer = producer;
	        this.length = length;
	        this.description = description;
	        this.episodes = episodes;
	        this.tags = tags;
	        this.imageUrl = imageUrl;
	    }
	    
	    // Getters/Setters
	    public int getId() {
			return id;
		}
	
		public void setId(int id) {
			this.id = id;
		}
	
		public String getName() {
			return name;
		}
	
		public void setName(String name) {
			this.name = name;
		}
	
		public String getLink() {
			return link;
		}
	
		public void setLink(String link) {
			this.link = link;
		}
	
		public String getRelease() {
			return release;
		}
	
		public void setRelease(String release) {
			this.release = release;
		}
	
		public String getProducer() {
			return producer;
		}
	
		public void setProducer(String producer) {
			this.producer = producer;
		}
	
		public String getLength() {
			return length;
		}
	
		public void setLength(String length) {
			this.length = length;
		}
	
		public String getDescription() {
			return description;
		}
	
		public void setDescription(String description) {
			this.description = description;
		}
	
		public List<Episode> getEpisodes() {
			return episodes;
		}
	
		public void setEpisodes(List<Episode> episodes) {
			this.episodes = episodes;
		}
	
		public List<String> getTags() {
			return tags;
		}
	
		public void setTags(List<String> tags) {
			this.tags = tags;
		}
		
		public String getImageUrl() {
			return imageUrl;
		}
		
		public void setImageUrl(String imageUrl) {
			this.imageUrl = imageUrl;
		}
		
	
		public class Episode
	    {
	        private int number;
	        private String name;
	        private String link;
	        private String description;
	        private String imageUrl;
	        
	        
	        // Default Constructor
	        public Episode() {
	        	this.number = 0;
	        	this.name = "";
	        	this.link = "";
	        	this.description = "";
	        	this.imageUrl = "";
	        }
	        
	        // Constructor
			public Episode(int number, String name, String link, String description,
	        String imageUrl) {
				this.number = number;
				this.name = name;
				this.link = link;
				this.description = description;
				this.imageUrl = imageUrl;
			}
	
			public int getNumber() {
				return number;
			}
	
			public void setNumber(int number) {
				this.number = number;
			}
	
			public String getName() {
				return name;
			}
	
			public void setName(String name) {
				this.name = name;
			}
	
			public String getLink() {
				return link;
			}
	
			public void setLink(String link) {
				this.link = link;
			}
	
			public String getDescription() {
				return description;
			}
	
			public void setDescription(String description) {
				this.description = description;
			}
	
			public String getImageUrl() {
				return imageUrl;
			}
	
			public void setImageUrl(String imageUrl) {
				this.imageUrl = imageUrl;
			}
			
	    }    
	     
	}
}