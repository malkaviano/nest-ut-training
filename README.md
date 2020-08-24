## License

  MIT licensed

## Purpose

  To present a basic view on how to unit test using Nestjs and Jest.

## Introduction

  It's the author's idea that we shouldn't unit test others code, only our code.
  i.e. Business Code.

  One can achieve 100% coverage of unit tests in the code, but most of the tests are going to be useless.

  When in doubt how to unit test a controller, just dont! Controllers are framework code and should not have business logic. Controllers benefit more from e2e tests where the test have some value, instead of proving you know how to call your services...

  When tired of mocking others libs, remember: "You shouldn't!". You can always separate your business code from other's libs using an abstration. This should make your unit tests easier. Then make integration tests between your abstration's implementation and other's lib.

  Remember acceptance, e2e and regression tests are way more valuable to the client than unit tests, use unit tests with parsimony. They are a tool to keep your code easy to refactor and nothing more.

  Of course this is the author's opinion, mileage may vary.

## How to run

  - npm i

  - npm test

## See also

  https://github.com/NagRock/ts-mockito