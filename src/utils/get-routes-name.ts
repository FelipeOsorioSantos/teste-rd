//input "/dashboard/x"
//output "/x/
export const getRouteName = (path: string) => {
  let r = path.split('/');
  let sli = r.slice(2, 3);
  let j = sli.join('/');
  return `/${j}`;
};

//input "/dashboard/x/y/z"
//output "/x/y/z
export const getSubrouteName = (path: string) => {
  let r = path.split('/');
  let sli = r.slice(2, r.length);
  let j = sli.join('/');
  return `/${j}`;
};
