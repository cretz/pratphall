///<reference path='all.d.ts' />

function class_alias(original: string, alias: string, autoload?: bool): bool; //TODO: inform users they have to the new one
function class_exists(class_name: string, autoload?: bool): bool;
function get_called_class(): string;
function get_class(object?: any): string;
function get_class_methods(class_name: any): string[];
function get_class_vars(class_name: string): Pct.PhpAssocArray[];
function get_declared_classes(): string[];
function get_declared_interfaces(): string[];
function get_declared_traits(): string[];
function get_object_vars(object: any): Pct.PhpAssocArray;
function get_parent_class(object?: any): string;
function interface_exists(interface_name: string, autoload?: bool): bool;
function is_a(object: any, class_name: string, allow_string?: bool): bool;
function is_subclass_of(object: any, class_name: string, allow_string?: bool): bool;
function method_exists(object: any, method_name: string): bool;
function property_exists(object: any, property: string): bool;
function trait_exists(traitname: string, autoload?: bool): bool;