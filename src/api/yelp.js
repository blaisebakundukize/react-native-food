import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer WXAJI5JZXxuxPKW9IbwNOotDeboIWNV7jqAtIrse88SKlFQGc-Ntqnxdn8d8b3ma3YTJi2l29eeIVOkmHaulgriYCmnhDLvc9c6HySS8l9hVGCpzZqPvH3UV5BkPXnYx'
  }
});
