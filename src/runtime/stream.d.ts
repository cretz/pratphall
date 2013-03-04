///<reference path='all.d.ts' />

var PSFS_ERR_FATAL: number;
var PSFS_FEED_ME: number;
var PSFS_FLAG_FLUSH_CLOSE: number;
var PSFS_FLAG_FLUSH_INC: number;
var PSFS_FLAG_NORMAL: number;
var PSFS_PASS_ON: number;

var STREAM_CAST_AS_STREAM: number;
var STREAM_CAST_FOR_SELECT: number;

var STREAM_CLIENT_ASYNC_CONNECT: number;
var STREAM_CLIENT_CONNECT: number;
var STREAM_CLIENT_PERSISTENT: number;

var STREAM_FILTER_ALL: number;
var STREAM_FILTER_READ: number;
var STREAM_FILTER_WRITE: number;

var STREAM_IPPROTO_ICMP: number;
var STREAM_IPPROTO_IP: number;
var STREAM_IPPROTO_RAW: number;
var STREAM_IPPROTO_TCP: number;
var STREAM_IPPROTO_UDP: number;

var STREAM_META_ACCESS: number;
var STREAM_META_GROUP: number;
var STREAM_META_GROUP_NAME: number;
var STREAM_META_OWNER: number;
var STREAM_META_OWNER_NAME: number;
var STREAM_META_TOUCH: number;

var STREAM_NOTIFY_AUTH_REQUIRED: number;
var STREAM_NOTIFY_AUTH_RESULT: number;
var STREAM_NOTIFY_COMPLETED: number;
var STREAM_NOTIFY_CONNECT: number;
var STREAM_NOTIFY_FAILURE: number;
var STREAM_NOTIFY_FILE_SIZE_IS: number;
var STREAM_NOTIFY_MIME_TYPE_IS: number;
var STREAM_NOTIFY_PROGRESS: number;
var STREAM_NOTIFY_REDIRECTED: number;
var STREAM_NOTIFY_RESOLVE: number;
var STREAM_NOTIFY_SEVERITY_ERR: number;
var STREAM_NOTIFY_SEVERITY_INFO: number;
var STREAM_NOTIFY_SEVERITY_WARN: number;

var STREAM_PF_INET6: number;
var STREAM_PF_INET: number;
var STREAM_PF_UNIX: number;

var STREAM_REPORT_ERRORS: number;

var STREAM_SERVER_BIND: number;
var STREAM_SERVER_LISTEN: number;

var STREAM_SHUT_RD: number;
var STREAM_SHUT_RDWR: number;
var STREAM_SHUT_WR: number;

var STREAM_SOCK_DGRAM: number;
var STREAM_SOCK_RAW: number;
var STREAM_SOCK_RDM: number;
var STREAM_SOCK_SEQPACKET: number;
var STREAM_SOCK_STREAM: number;

var STREAM_USE_PATH: number;

class php_user_filter {
    filtername: string;
    params: any; //TODO: wat?

    filter(in_: Pct.PhpResource, out: Pct.PhpResource, $consumed: number, closing: bool): number;
    onClose();
    onCreate(): bool;
}

//TODO: streamWrapper an interface or class?

function stream_bucket_append(brigade: Pct.PhpResource, bucket: Pct.PhpResource);
function stream_bucket_make_writable(brigade: Pct.PhpResource);
function stream_bucket_new(stream: Pct.PhpResource, buffer: string): any;
function stream_bucket_prepend(brigade: Pct.PhpResource, bucket: Pct.PhpResource);
function stream_context_create(options?: Pct.PhpAssocArray, params?: Pct.PhpAssocArray): Pct.PhpResource;
function stream_context_get_default(options?: Pct.PhpAssocArray): Pct.PhpResource;
function stream_context_get_options(stream_or_context: Pct.PhpResource): Pct.PhpAssocArray;
function stream_context_get_params(stream_or_context: Pct.PhpResource): Pct.PhpAssocArray;
function stream_context_set_default(options: Pct.PhpAssocArray): Pct.PhpResource;
function stream_context_set_option(stream_or_context: Pct.PhpResource, wrapper: string, option: string, value: any): bool;
function stream_context_set_option(stream_or_context: Pct.PhpResource, options: Pct.PhpAssocArray): bool;
function stream_context_set_params(stream_or_context: Pct.PhpResource, params: Pct.PhpAssocArray): bool;
function stream_copy_to_stream(source: Pct.PhpResource, dest: Pct.PhpResource, maxlength?: number, offset?: number): number;
function stream_encoding(stream: Pct.PhpResource, encoding?: string): bool;
function stream_filter_append(stream: Pct.PhpResource, filtername: string, read_write?: number, params?: Pct.PhpAssocArray): Pct.PhpResource;
function stream_filter_prepend(stream: Pct.PhpResource, filtername: string, read_write?: number, params?: Pct.PhpAssocArray): Pct.PhpResource;
function stream_filter_register(filtername: string, classname: string): bool;
function stream_filter_remove(stream_filter: Pct.PhpResource): bool;
function stream_get_contents(handle: Pct.PhpResource, maxlength?: number, offset?: number): string;
function stream_get_filters(): string[];
function stream_get_line(handle: Pct.PhpResource, length: number, ending?: string): string;
function stream_get_meta_data(stream: Pct.PhpResource): Pct.PhpAssocArray;
function stream_get_transports(): string[];
function stream_get_wrappers(): string[];
function stream_is_local(url: string): bool;
function stream_is_local(stream: Pct.PhpResource): bool;
function stream_resolve_include_path(filename: string): string;
function stream_select($read: Pct.PhpResource[], $write: Pct.PhpResource[], $except: Pct.PhpResource[], tv_sec: number, tv_usec?: number): number;
function stream_set_blocking(stream: Pct.PhpResource, mode: number): bool;
function stream_set_chunk_size(fp: Pct.PhpResource, chunk_size: number): number;
function stream_set_read_buffer(stream: Pct.PhpResource, buffer: number): number;
function stream_set_timeout(stream: Pct.PhpResource, seconds: number, microseconds?: number): bool;
function stream_set_write_buffer(stream: Pct.PhpResource, buffer: number): number;
function stream_socket_accept(server_socket: Pct.PhpResource, timeout?: number, $peername?: string): Pct.PhpResource;
function stream_socket_client(remote_socket: string, $errno?: number, $errstr?: string, timeout?: number, flags?: number, context?: Pct.PhpResource): Pct.PhpResource;
function stream_socket_enable_crypto(stream: Pct.PhpResource, enable: bool, crypto_type?: number, session_stream?: Pct.PhpResource): any;
function stream_socket_get_name(handle: Pct.PhpResource, want_peer: bool): string;
function stream_socket_pair(domain: number, type: number, protocol: number): Pct.PhpResource[];
function stream_socket_recvfrom(socket: Pct.PhpResource, length: number, flags?: number, $address?: string): string;
function stream_socket_sendto(socket: Pct.PhpResource, data: string, flags?: number, address?: string): number;
function stream_socket_server(local_socket: string, $errno?: number, $errstr?: string, flags?: number, context?: Pct.PhpResource): Pct.PhpResource;
function stream_socket_shutdown(stream: Pct.PhpResource, how: number): bool;
function stream_supports_lock(stream: Pct.PhpResource): bool;
function stream_wrapper_register(protocol: string, classname: string, flags?: number): bool;
function stream_wrapper_restore(protocol: string): bool;
function stream_wrapper_unregister(protocol: string): bool;