
declare interface SessionHandlerInterface {
    close(): bool;
    destroy(session_id: string): bool;
    gc(maxlifetime: string): bool;
    open(save_path: string, name: string): bool;
    read(session_id: string): string;
    write(session_id: string, session_data: string): bool;
}

declare class SessionHandler implements SessionHandlerInterface {

}

//TODO: rest...don't feel like it right now...