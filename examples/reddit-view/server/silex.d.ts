
module Silex {
    //NOTE: this is only for declarations this file may need, it is NOT comprehensive

    class Application {
        get(pattern: string, to: (...args: any[]) => any): Controller;
        escape(str: string): string;
        run();
    }

    class Controller {
    }
}