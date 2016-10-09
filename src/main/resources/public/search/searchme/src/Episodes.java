import java.util.Arrays;

/**
 * Created by Jason on 10/8/2016.
 */


//documentation is same as podcast
public class Episodes {
    public String episodeNum;
    public String episodeName;
    public String episodeLink;
    public String episodeDescription;
    public String episodeImageUrl;

    public Episodes(String epNum, String epName, String epLink, String epDescription, String epImageURL){
        episodeNum = epNum;
        episodeName = epName;
        episodeLink = epLink;
        episodeDescription = epDescription;
        episodeImageUrl = epImageURL;
    }

    public Episodes(Episodes e){
        this.episodeNum = e.episodeNum;
        this.episodeName = e.episodeName;
        this.episodeLink = e.episodeLink;
        this.episodeDescription = e.episodeDescription;
        this.episodeImageUrl = e.episodeImageUrl;


    }

    public void listMe(){
        System.out.println("Episodes: [{");
        System.out.println("    Number: " + episodeNum);
        System.out.println("    Name: " + episodeName);
        System.out.println("    Link: " + episodeLink);
        System.out.println("    Description: " + episodeDescription);
        System.out.println("    ImageURL: " + episodeImageUrl);
        System.out.println("]}");
    }

    public Boolean findMe(String input) {
        String[] elements = input.split(" ");

        Boolean found = false;
        for (int i = 0; i < elements.length && found == false; i++) {
            if (episodeNum.toLowerCase().contains(elements[i].toLowerCase()))
                found = true;
            if (episodeName.toLowerCase().contains(elements[i].toLowerCase()))
                found = true;
            if (episodeLink.toLowerCase().contains(elements[i].toLowerCase()))
                found = true;
            if (episodeDescription.toLowerCase().contains(elements[i].toLowerCase()))
                found = true;
            if (episodeImageUrl.toLowerCase().contains(elements[i].toLowerCase()))
                found = true;


        }
        return found;
    }


    }
