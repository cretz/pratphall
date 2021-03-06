///<reference path='all.d.ts' />

//my god are the SPL docs bad...wrong return types, param types, etc...

interface Countable {
    count(): number;
}

interface SeekableIterator extends Iterator {
    seek(position: number);
}

interface RecursiveIterator extends Iterator {
    getChildren(): RecursiveIterator;
    hasChildren(): bool;
}

interface OuterIterator extends Iterator {
    getInnerIterator(): Iterator;
}

interface SplObserver {
    update(subject: SplSubject);
}

interface SplSubject {
    attach(observer: SplObserver);
    detach(observer: SplObserver);
    notify();
}

class SplDoublyLinkedList implements Iterator, ArrayAccess, Countable {
    static IT_MODE_DELETE: number;
    static IT_MODE_FIFO: number;
    static IT_MODE_KEEP: number;
    static IT_MODE_LIFO: number;

    bottom(): any;
    getIteratorMode(): number;
    isEmpty(): bool;
    pop(): bool;
    prev();
    push(value: any);
    serialize(): string;
    setIteratorMode(mode: number);
    shift(): any;
    top(): any;
    unserialize(serialized: string);
    unshift(value: any);

    current(): any;
    key(): any;
    next();
    rewind();
    valid(): bool;
    offsetExists(offset: any): bool;
    offsetGet(offset: any): any;
    offsetSet(offset: any, value: any);
    offsetUnset(offset: any);
    count(): number;
}

class SplStack extends SplDoublyLinkedList {

}

class SplQueue extends SplDoublyLinkedList {
    dequeue(): any;
    enqueue(value: any);
}

class SplHeap implements Iterator, Countable {
    compare(value1: any, value2: any): number;
    extract(): any;
    insert(value: any);
    isEmpty(): bool;
    recoverFromCorruption();
    top(): any;

    current(): any;
    key(): any;
    next();
    rewind();
    valid(): bool;
    count(): number;
}

class SplMaxHeap extends SplHeap {
}

class SplMinHeap extends SplHeap {
}

class SplPriorityQueue implements Iterator, Countable {
    static EXTR_BOTH: number;
    static EXTR_DATA: number;
    static EXTR_PRIORITY: number;

    compare(priority1: any, priority2: any): number;
    extract(): any;
    insert(value: any, priority: any);
    isEmpty(): bool;
    recoverFromCorruption();
    setExtractFlags(flags: number);
    top(): any;

    current(): any;
    key(): any;
    next();
    rewind();
    valid(): bool;
    count(): number;
}

class SplFixedArray implements Iterator, ArrayAccess, Countable {
    static fromArray(array: Array, save_indexes?: bool): SplFixedArray;

    constructor(size?: number);
    getSize(): number;
    setSize(size: number): number;
    toArray(): Array;
    __wakeup();

    current(): any;
    key(): any;
    next();
    rewind();
    valid(): bool;
    offsetExists(offset: any): bool;
    offsetGet(offset: any): any;
    offsetSet(offset: any, value: any);
    offsetUnset(offset: any);
    count(): number;
}

class SplObjectStorage implements Countable, Iterator, Serializable, ArrayAccess {
    addAll(storage: SplObjectStorage);
    attach(object: Object, data?: any);
    contains(object: Object): bool;
    detach(object: Object);
    getHash(object?: Object): string;
    getInfo(): any;
    removeAll(storage: SplObjectStorage);
    removeAllExcept(storage: SplObjectStorage);
    setInfo(data: any);

    current(): any;
    key(): any;
    next();
    rewind();
    valid(): bool;
    offsetExists(offset: any): bool;
    offsetGet(offset: any): any;
    offsetSet(offset: any, value: any);
    offsetUnset(offset: any);
    count(): number;
    serialize(): string;
    unserialize(serialized: string);
}

class ArrayIterator implements ArrayAccess, SeekableIterator, Countable, Serializable {
    constructor(array?: any, flags?: number);
    append(value: any);
    asort();
    getArrayCopy(): Array;
    getFlags(); //TODO: what?
    ksort();
    natcasesort();
    natsort();
    setFlags(flags: string); //TODO: string?
    uasort(cmp_function: string); //TODO: string?
    uksort(cmp_function: string); //TODO: string?

    current(): any;
    key(): any;
    next();
    rewind();
    valid(): bool;
    seek(position: number);
    offsetExists(offset: any): bool;
    offsetGet(offset: any): any;
    offsetSet(offset: any, value: any);
    offsetUnset(offset: any);
    count(): number;
    serialize(): string;
    unserialize(serialized: string);
}

class RecursiveArrayIterator extends ArrayIterator implements RecursiveIterator {
    getChildren(): RecursiveIterator;
    hasChildren(): bool;
}

class EmptyIterator implements Iterator {
    current(): any;
    key(): any;
    next();
    rewind();
    valid(): bool;
}

class IteratorIterator implements OuterIterator {
    constructor(iterator: Traversable);

    current(): any;
    key(): any;
    next();
    rewind();
    valid(): bool;
    getInnerIterator(): Iterator;
}

class AppendIterator extends IteratorIterator {
    constructor();
    append(iterator: Iterator);
    getArrayIterator(): ArrayIterator;
    getIteratorIndex(): number;
}

class CachingIterator extends IteratorIterator implements ArrayAccess, Countable {
    static CALL_TOSTRING: number;
    static CATCH_GET_CHILD: number;
    static FULL_CACHE: number;
    static TOSTRING_USE_CURRENT: number;
    static TOSTRING_USE_INNER: number;
    static TOSTRING_USE_KEY: number;

    constructor(iterator: Iterator, flags?: number);
    getCache(); //TODO: wat?
    getFlags(); //TODO: wat?
    setFlags(flags: number);

    offsetExists(offset: any): bool;
    offsetGet(offset: any): any;
    offsetSet(offset: any, value: any);
    offsetUnset(offset: any);
    count(): number;
}

class RecursiveCachingIterator extends CachingIterator implements RecursiveIterator {
    getChildren(): RecursiveCachingIterator;
    hasChildren(): bool;
}

class FilterIterator extends IteratorIterator {
    constructor(iterator: Iterator);
    accept(): bool;
}

class CallbackFilterIterator extends FilterIterator {
    constructor(iterator: Iterator, callback: (current: any, key: any, iterator: Iterator) => bool);
}

class RecursiveCallbackFilterIterator extends CallbackFilterIterator implements RecursiveIterator {
    constructor(iterator: RecursiveIterator, callback: (current: any, key: any, iterator: Iterator) => bool);

    getChildren(): RecursiveCallbackFilterIterator;
    hasChildren(): bool;
}

class RecursiveFilterIterator extends FilterIterator implements RecursiveIterator {
    constructor(iterator: RecursiveIterator);

    getChildren(): RecursiveFilterIterator;
    hasChildren(): bool;
}

class ParentIterator extends RecursiveFilterIterator {
    getChildren(): ParentIterator;
}

class RegexIterator extends FilterIterator {
    static ALL_MATCHES: number;
    static GET_MATCH: number;
    static MATCH: number;
    static REPLACE: number;
    static SPLIT: number;
    static USE_KEY: number;

    constructor(iterator: Iterator, regex: string, mode?: number, flags?: number, preg_flags?: number);
    getFlags(): number;
    getMode(): number;
    getPregFlags(): number;
    getRegex(): string;
    setFlags(flags: number);
    setMode(mode: number);
    setPregFlags(pref_flags: number);
}

class RecursiveRegexIterator extends RegexIterator implements RecursiveIterator {
    constructor(iterator: RecursiveIterator, regex: string, mode?: number, flags?: number, preg_flags?: number);

    getChildren(): RecursiveIterator;
    hasChildren(): bool;
}

class InfiniteIterator extends IteratorIterator {
    constructor(iterator: Iterator);
}

class LimitIterator extends IteratorIterator {
    constructor(iterator: Iterator, offset?: number, count?: number);
    getPosition(): number;
    seek(position: number): number;
}

class NoRewindIterator extends IteratorIterator {
    constructor(iterator: Iterator);
}

class MultipleIterator implements Iterator {
    static MIT_KEYS_ASSOC: number;
    static MIT_KEYS_NUMERIC: number;
    static MIT_NEED_ALL: number;
    static MIT_NEED_ANY: number;

    constructor(flags?: number);
    attachIterator(iterator: Iterator, infos?: string);
    containsIterator(iterator: Iterator); //TODO: wat?
    countIterators(); //TODO: wat?
    detachIterator(iterator: Iterator);
    getFlags(); //TODO: wat?
    setFlags(flags: number);

    current(): any;
    key(): any;
    next();
    rewind();
    valid(): bool;
}

class RecursiveIteratorIterator implements OuterIterator {
    static CATCH_GET_CHILD: number;
    static CHILD_FIRST: number;
    static LEAVES_ONLY: number;
    static SELF_FIRST: number;

    constructor(iterator: Traversable, mode?: number, flags?: number);
    beginChildren();
    beginIteration();
    callGetChildren(): RecursiveIterator;
    callHasChildren(): bool;
    endChildren();
    endIteration();
    getDepth(): number;
    getMaxDepth(): number;
    getSubIterator(): RecursiveIterator;
    nextElement();
    setMaxDepth(max_depth?: number); //doc says string, I'm ignoring the doc

    current(): any;
    key(): any;
    next();
    rewind();
    valid(): bool;
    getInnerIterator(): Iterator;
}

class RecursiveTreeIterator extends RecursiveIteratorIterator {
    static BYPASS_CURRENT: number;
    static BYPASS_KEY: number;
    static PREFIX_END_LAST: number;
    static PREFIX_END_HAS_NEXT: number;
    static PREFIX_LEFT: number;
    static PREFIX_MID_HAS_NEXT: number;
    static PREFIX_MID_LAST: number;
    static PREFIX_RIGHT: number;

    constructor(it: RecursiveIterator, flags?: number, cit_flags?: number, mode?: number);
    constructor(it: IteratorAggregate, flags?: number, cit_flags?: number, mode?: number);
    getEntry(): string;
    getPostfix(); //TODO: wat?
    getPrefix(): string;
    setPrefixPart(part: number, value: string);
}

class LogicException extends Exception { }

class BadFunctionCallException extends LogicException { }

class BadMethodCallException extends BadFunctionCallException { }

class DomainException extends LogicException { }

class InvalidArgumentException extends LogicException { }

class LengthException extends LogicException { }

class OutOfRangeException extends LogicException { }

class RuntimeException extends Exception { }

class OutOfBoundsException extends RuntimeException { }

class OverflowException extends RuntimeException { }

class RangeException extends RuntimeException { }

class UnderflowException extends RuntimeException { }

class UnexpectedValueException extends RuntimeException { }

class SplFileInfo {
    constructor(file_name: string);
    getATime(): number;
    getBasename(suffix?: string): string;
    getCTime(): number;
    getExtension(): string;
    getFileInfo(class_name?: string): SplFileInfo;
    getFilename(): string;
    getGroup(): number;
    getInode(): number;
    getLinkTarget(): string;
    getMTime(): number;
    getOwner(): number;
    getPath(): string;
    getPathInfo(class_name?: string): SplFileInfo;
    getPathname(): string;
    getPerms(): number;
    getRealPath(): string;
    getSize(): number;
    getType(): string;
    isDir(): bool;
    isExecutable(): bool;
    isFile(): bool;
    isLink(): bool;
    isReadable(): bool;
    isWritable(): bool;
    openFile(open_mode?: string, use_include_path?: bool, context?: Pct.PhpResource): SplFileObject;
    setFileClass(class_name?: string);
    setInfoClass(class_name?: string);
}

class SplFileObject extends SplFileInfo implements RecursiveIterator, SeekableIterator {
    static DROP_NEW_LINE: number;
    static READ_AHEAD: number;
    static READ_CSV: number;
    static SKIP_EMPTY: number;

    constructor(filename: string, open_mode?: string, use_include_path?: bool, context?: Pct.PhpResource);
    eof(): bool;
    fflush(): bool;
    fgetc(): string;
    fgetcsv(delimiter?: string, enclosure?: string, escape?: string): any[];
    fgets(): string;
    fgetss(allowable_tags?: string): string;
    flock(operation: number, $wouldblock?: number): bool;
    fpassthru(): number;
    fputcsv(fields: any[], delimiter?: string, enclosure?: string): number;
    fscanf(format?: string): any[]; //NOTE: the assign-variables version does not work currently
    fseek(offset: number, whence?: number): number;
    fstat(): Pct.PhpAssocArray;
    ftell(): number;
    ftruncate(size: number): bool;
    fwrite(str: string, length?: number): number;
    getCsvControl(): string[];
    getFlags(): number;
    getMaxLineLen(): number;
    setCsvControl(delimiter?: string, enclosure?: string, escape?: string);
    setFlags(flags: number);
    setMaxLineLen(max_len: number);

    current(): any;
    key(): any;
    next();
    rewind();
    valid(): bool;
    getChildren(): RecursiveIterator;
    hasChildren(): bool;
    seek(position: number);
}

class SplTempFileObject extends SplFileObject {
    constructor(max_memory?: number);
}

class DirectoryIterator extends SplFileInfo implements SeekableIterator {
    isDot(): bool;

    current(): any;
    key(): any;
    next();
    rewind();
    valid(): bool;
    seek(position: number);
}

class FilesystemIterator extends DirectoryIterator {
    static CURRENT_AS_FILEINFO: number;
    static CURRENT_AS_PATHNAME: number;
    static CURRENT_AS_SELF: number;
    static CURRENT_MODE_MASK: number;
    static FOLLOW_SYMLINKS: number;
    static KEY_AS_FILENAME: number;
    static KEY_AS_PATHNAME: number;
    static KEY_MODE_MASK: number;
    static NEW_CURRENT_AND_KEY: number;
    static SKIP_DOTS: number;
    static UNIX_PATHS: number;

    constructor(path: string, flags?: number);
}

class GlobIterator extends FilesystemIterator implements Countable {
    count(): number;
}

class RecursiveDirectoryIterator extends FilesystemIterator implements RecursiveIterator {
    getSubPath(): string;
    getSubPathname(): string;

    getChildren(): RecursiveIterator;
    hasChildren(allow_links?: bool): bool;
}

class ArrayObject implements IteratorAggregate, ArrayAccess, Serializable, Countable {
    static ARRAY_AS_PROPS: number;
    static STD_PROP_LIST: number;

    constructor(input?: any, flags?: number, iterator_class?: string);
    append(value: any);
    asort();
    exchangeArray(input?: any): Array;
    getArrayCopy(): Array;
    getFlags(): number;
    getIteratorClass(): string;
    ksort();
    natcasesort();
    natsort();
    setFlags(flags: number);
    setIteratorClass(iterator_class: string);
    uasort(cmp_function: (a: any, b: any) => number);
    uksort(cmp_function: (a: any, b: any) => number);

    getIterator(): ArrayIterator;
    offsetExists(offset: any): bool;
    offsetGet(offset: any): any;
    offsetSet(offset: any, value: any);
    offsetUnset(offset: any);
    serialize(): string;
    unserialize(serialized: string);
    count(): number;
}

function class_implements(class_: any, autoload?: bool): Pct.PhpAssocArray;
function class_parents(class_: any, autoload?: bool): Pct.PhpAssocArray;
function class_uses(class_: any, autoload?: bool): Pct.PhpAssocArray;
function iterator_apply(iterator: Traversable, function_: (iterator: Traversable) => any, args?: any[]): number;
function iterator_count(iterator: Traversable): number;
function iterator_to_array(iterator: Traversable): any[];
function iterator_to_array(iterator: Traversable, use_keys: bool): Array;
function spl_autoload(class_name: string, file_extensions?: string);
function spl_autoload_call(class_name: string);
function spl_autoload_extensions(file_extensions?: string): string;
function spl_autoload_functions(): any[];
function spl_autoload_register(autoload_function?: (class_: string) => void, throw_?: bool, prepend?: bool): bool;
function spl_autoload_unregister(autoload_function: (class_: string) => void): bool;
function spl_classes(): Pct.PhpAssocArray;
function spl_object_hash(obj: any): string;