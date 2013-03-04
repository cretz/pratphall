///<reference path='all.d.ts' />

interface SessionHandlerInterface {
    close(): bool;
    destroy(session_id: string): bool;
    gc(maxlifetime: string): bool;
    open(save_path: string, name: string): bool;
    read(session_id: string): string;
    write(session_id: string, session_data: string): bool;
}

class SessionHandler implements SessionHandlerInterface {
    close(): bool;
    destroy(session_id: string): bool;
    gc(maxlifetime: string): bool;
    open(save_path: string, name: string): bool;
    read(session_id: string): string;
    write(session_id: string, session_data: string): bool;
}

//TODO: rest...don't feel like it right now...