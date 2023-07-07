import UrlPattern from "url-pattern";
export default defineEventHandler(async (event) => {
  let query = event.path;
  let endpoints = ["/api/user"];
  let mathcedEndpoint = endpoints.some((endPoint) => {
    let item = new UrlPattern(endPoint);
    return item.match(query);
  });
  if (mathcedEndpoint) {
  }
});
