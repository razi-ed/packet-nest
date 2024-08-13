import { Pagination as AntDPagination } from "antd";
/* ***package imports above this***  */

/* ***components imports above this***  */

/* ***libs, utils, custom-hooks imports above this***  */

/* ***configs imports above this***  */

/* ***enums, consts imports above this***  */

/* ***types imports above this***  */

/* ***style and styled components imports above this***  */

interface PaginationProps {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  onPageChange: (newPage: number, itemsPerPage: number) => void;
}

/* ***local declarations above this***  */

export default function Pagination(props: PaginationProps) {
  const { currentPage, itemsPerPage, onPageChange, totalItems } = props;
  /* ***props decustructions above this***  */

  /* ***hooks initializations above this***  */

  /* ***state initializations above this***  */

  /* ***side effects definitions above this***  */

  /* ***memoised functions initializations above this***  */

  /* ***memoised variables initializations above this***  */

  /* ***internal declarations, if necessary, above this***  */

  /* ***conditional renderings above this***  */

  return (
    <AntDPagination
      total={totalItems}
      align="center"
      pageSize={itemsPerPage}
      current={currentPage}
      onChange={onPageChange}
      showSizeChanger={false}
      responsive
    />
  );
}
