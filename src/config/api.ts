// Base API service configuration
export const API_ENDPOINTS = {
  AUTH: {
    SIGNUP: '/api/auth/signup',
    LOGIN: '/api/auth/login',
    LOGOUT: '/api/auth/logout',
    REFRESH: '/api/auth/refresh'
  },
  USER: {
    PROFILE: '/api/user/profile',
    UPDATE: '/api/user/update'
  },
  PRODUCTS: {
    LIST: '/api/products',
    DETAIL: '/api/products/:id',
    SEARCH: '/api/products/search'
  },
  CART: {
    GET: '/api/cart',
    ADD: '/api/cart/add',
    UPDATE: '/api/cart/update',
    REMOVE: '/api/cart/remove'
  }
} as const;

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
} as const;