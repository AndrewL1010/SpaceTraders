import { server } from './src/mocks/node.js'
import '@testing-library/jest-dom'
beforeAll(() => {
  server.listen()
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})