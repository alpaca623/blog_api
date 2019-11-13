import Server from "./common/server";
import routes from "./routes";
import config from "./common/config";

export default new Server().router(routes).listen(config.PORT);
