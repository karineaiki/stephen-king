export interface Books {
    title: string;
    author_name: string;
    description:string |  {value: string};
    covers: [string];
    key:string;
    subjects:[string];
}
