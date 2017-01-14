package kim.lindqvist.web;

/**
 * Created by Kim Lindqvist on 14-Jan-17.
 */

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

public class MainController {

    @RequestMapping(value="/",method = RequestMethod.GET)
    public String index() {
        return "index";
    }
}