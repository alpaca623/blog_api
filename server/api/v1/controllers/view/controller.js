import l from "../../../../common/logger";

class Controller {
  getHome(req, res) {
    l.debug('[view controller]');
    res.render("index", {
      title: "Blog setting",
      length: 5
    });
  }
}

export default new Controller();