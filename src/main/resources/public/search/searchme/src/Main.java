import java.util.Arrays;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        //Basic display, create podcast example with some sample data, Prompt user for what they want to search for, if
        // any word is identical to data, you'll see all podcast data. If no words were found, user is presented with message
        // indicating so


        Episodes []eList = new Episodes[2];
        eList[0] = new Episodes("1", "Early Childhood", "goober.com", "Avoiding the sunlight", "yolo.com");
        eList[1] = new Episodes("2", "Late Childhood", "goober.com", "Avoiding the moonlight", "yolt.com");

        Podcast p1 = new Podcast("1","Jason's Podcast", "https://jasonwebsite.com", "June 25, 1996", "My Mom", "60", "The magnificent Albino", eList);

        Scanner reader = new Scanner(System.in);  // Reading from System.in
        System.out.println("Input thing to search for");
        String input = reader.next();

        if(p1.findMe(input)){
            p1.listMe();
        }
        else
            System.out.println("No results found");
    }
}
