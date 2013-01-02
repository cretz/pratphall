///<reference path='all.ts' />

declare var PSFS_ERR_FATAL: number;
declare var PSFS_FEED_ME: number;
declare var PSFS_FLAG_FLUSH_CLOSE: number;
declare var PSFS_FLAG_FLUSH_INC: number;
declare var PSFS_FLAG_NORMAL: number;
declare var PSFS_PASS_ON: number;

declare var STREAM_CAST_AS_STREAM: number;
declare var STREAM_CAST_FOR_SELECT: number;

declare var STREAM_CLIENT_ASYNC_CONNECT: number;
declare var STREAM_CLIENT_CONNECT: number;
declare var STREAM_CLIENT_PERSISTENT: number;

declare var STREAM_FILTER_ALL: number;
declare var STREAM_FILTER_READ: number;
declare var STREAM_FILTER_WRITE: number;

declare var STREAM_IPPROTO_ICMP: number;
declare var STREAM_IPPROTO_IP: number;
declare var STREAM_IPPROTO_RAW: number;
declare var STREAM_IPPROTO_TCP: number;
declare var STREAM_IPPROTO_UDP: number;

declare var STREAM_META_ACCESS: number;
declare var STREAM_META_GROUP: number;
declare var STREAM_META_GROUP_NAME: number;
declare var STREAM_META_OWNER: number;
declare var STREAM_META_OWNER_NAME: number;
declare var STREAM_META_TOUCH: number;

declare var STREAM_NOTIFY_AUTH_REQUIRED: number;
declare var STREAM_NOTIFY_AUTH_RESULT: number;
declare var STREAM_NOTIFY_COMPLETED: number;
declare var STREAM_NOTIFY_CONNECT: number;
declare var STREAM_NOTIFY_FAILURE: number;
declare var STREAM_NOTIFY_FILE_SIZE_IS: number;
declare var STREAM_NOTIFY_MIME_TYPE_IS: number;
declare var STREAM_NOTIFY_PROGRESS: number;
declare var STREAM_NOTIFY_REDIRECTED: number;
declare var STREAM_NOTIFY_RESOLVE: number;
declare var STREAM_NOTIFY_SEVERITY_ERR: number;
declare var STREAM_NOTIFY_SEVERITY_INFO: number;
declare var STREAM_NOTIFY_SEVERITY_WARN: number;

declare var STREAM_PF_INET6: number;
declare var STREAM_PF_INET: number;
declare var STREAM_PF_UNIX: number;

declare var STREAM_REPORT_ERRORS: number;

declare var STREAM_SERVER_BIND: number;
declare var STREAM_SERVER_LISTEN: number;

declare var STREAM_SHUT_RD: number;
declare var STREAM_SHUT_RDWR: number;
declare var STREAM_SHUT_WR: number;

declare var STREAM_SOCK_DGRAM: number;
declare var STREAM_SOCK_RAW: number;
declare var STREAM_SOCK_RDM: number;
declare var STREAM_SOCK_SEQPACKET: number;
declare var STREAM_SOCK_STREAM: number;

declare var STREAM_USE_PATH: number;

declare class php_user_filter {
    filtername: string;
    params: any; //TODO: wat?

    filter(in_: Pct.PhpResource, out: Pct.PhpResource, $consumed: number, closing: bool): number;
    onClose();
    onCreate(): bool;
}

//TODO: streamWrapper an interface or class?

declare function stream_bucket_append(brigade: Pct.PhpResource, bucket: Pct.PhpResource);
declare function stream_bucket_make_writable(brigade: Pct.PhpResource);
declare function stream_bucket_new(stream: Pct.PhpResource, buffer: string): any;
declare function stream_bucket_prepend(brigade: Pct.PhpResource, bucket: Pct.PhpResource);
declare function stream_context_create(options?: Pct.PhpAssocArray, params?: Pct.PhpAssocArray): Pct.PhpResource;
declare function stream_context_get_default(options?: Pct.PhpAssocArray): Pct.PhpResource;
declare function stream_context_get_options(stream_or_context: Pct.PhpResource): Pct.PhpAssocArray;
declare function stream_context_get_params(stream_or_context: Pct.PhpResource): Pct.PhpAssocArray;
declare function stream_context_set_default(options: Pct.PhpAssocArray): Pct.PhpResource;
declare function stream_context_set_option(stream_or_context: Pct.PhpResource, wrapper: string, option: string, value: any): bool;
declare function stream_context_set_option(stream_or_context: Pct.PhpResource, options: Pct.PhpAssocArray): bool;
declare function stream_context_set_params(stream_or_context: Pct.PhpResource, params: Pct.PhpAssocArray): bool;
declare function stream_copy_to_stream(source: Pct.PhpResource, dest: Pct.PhpResource, maxlength?: number, offset?: number): number;
declare function stream_encoding(stream: Pct.PhpResource, encoding?: string): bool;
declare function stream_filter_append(stream: Pct.PhpResource, filtername: string, read_write?: number, params?: Pct.PhpAssocArray): Pct.PhpResource;
declare function stream_filter_prepend(stream: Pct.PhpResource, filtername: string, read_write?: number, params?: Pct.PhpAssocArray): Pct.PhpResource;
declare function stream_filter_register(filtername: string, classname: string): bool;
declare function stream_filter_remove(stream_filter: Pct.PhpResource): bool;
declare function stream_get_contents(handle: Pct.PhpResource, maxlength?: number, offset?: number): string;
declare function stream_get_filters(): string[];
declare function stream_get_line(handle: Pct.PhpResource, length: number, ending?: string): string;
declare function stream_get_meta_data(stream: Pct.PhpResource): Pct.PhpAssocArray;
declare function stream_get_transports(): string[];
declare function stream_get_wrappers(): string[];
declare function stream_is_local(url: string): bool;
declare function stream_is_local(stream: Pct.PhpResource): bool;
declare function stream_resolve_include_path(filename: string): string;
declare function stream_select($read: Pct.PhpResource[], $write: Pct.PhpResource[], $except: Pct.PhpResource[], tv_sec: number, tv_usec?: number): number;
declare function stream_set_blocking(stream: Pct.PhpResource, mode: number): bool;
declare function stream_set_chunk_size(fp: Pct.PhpResource, chunk_size: number): number;
declare function stream_set_read_buffer(stream: Pct.PhpResource, buffer: number): number;
declare function stream_set_timeout(stream: Pct.PhpResource, seconds: number, microseconds?: number): bool;
declare function stream_set_write_buffer(stream: Pct.PhpResource, buffer: number): number;
declare function stream_socket_accept(server_socket: Pct.PhpResource, timeout?: number, $peername?: string): Pct.PhpResource;
declare function stream_socket_client(remote_socket: string, $errno?: number, $errstr?: string, timeout?: number, flags?: number, context?: Pct.PhpResource): Pct.PhpResource;
declare function stream_socket_enable_crypto(stream: Pct.PhpResource, enable: bool, crypto_type?: number, session_stream?: Pct.PhpResource): any;
declare function stream_socket_get_name(handle: Pct.PhpResource, want_peer: bool): string;
declare function stream_socket_pair(domain: number, type: number, protocol: number): Pct.PhpResource[];
declare function stream_socket_recvfrom(socket: Pct.PhpResource, length: number, flags?: number, $address?: string): string;
declare function stream_socket_sendto(socket: Pct.PhpResource, data: string, flags?: number, address?: string): number;
declare function stream_socket_server(local_socket: string, $errno?: number, $errstr?: string, flags?: number, context?: Pct.PhpResource): Pct.PhpResource;
declare function stream_socket_shutdown(stream: Pct.PhpResource, how: number): bool;
declare function stream_supports_lock(stream: Pct.PhpResource): bool;
declare function stream_wrapper_register(protocol: string, classname: string, flags?: number): bool;
declare function stream_wrapper_restore(protocol: string): bool;
declare function stream_wrapper_unregister(protocol: string): bool;