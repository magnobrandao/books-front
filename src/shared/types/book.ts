export type TDataBook = {
  id: string;
  name: string;
  authors: string[];
  description: string;
  imagelink: string;
  publishedat: string;
  createdat: string;
  searchable: string;
};

export type TBook = {
  data: TDataBook[];
  hasMore: boolean;
};
