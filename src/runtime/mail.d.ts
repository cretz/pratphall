
declare function ezmlm_hash(addr: string): number;
declare function mail(to: string, subject: string, message: string, additional_headers?: string, additional_parameters?: string): bool;