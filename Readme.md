# 휴머스온 사전과제

## 실행방법
1. 로컬 실행 명령어 : pnpm run
2. 모듈 테스트 명령 : pnpm test


## 적용 기술 및 근거
1. 언어 : 입사 후 Java를 사용할 것 같으나 구현의 퀄리티를 위하여 가장 자신있는 Typescript(javascript)를 활용하였습니다.
2. 프레임워크 : node.js, Go, python을 사용하여 백엔드 실무를 한 경험을 토대로 Nest.js를 이용해 보다 유효성검사가 용이하고 확장성 있는 프로젝트를 구현하고자 시도하였습니다.
3. 패키지 관리 : npm으로 대부분의 공식문서 예시가 되어있지만 추후에 여러 마이크로 서비스가 생길 가능성을 고려하여 pnpm을 통해 패키지를 설치함으로써 효율적인 패키지 관리를 의도했습니다.


## 요구사항 분석
주어진 요구사항을 기능/비기능적 요구사항으로 세분하고 더욱 구체적인 명세를 정했습니다.
1. 기능적 요구사항(Functional requirements)
    1. 주문데이터 저장 및 조회
        - 외부 시스템에서 JSON 형식의 주문 데이터를 HTTP로 받아와 시스템에 저장
        - 받아온 데이터를 메모리에 저장
        - 주문ID로 주문데이터 단일 및 리스트 형식으로 조회
    2. 데이터 형식
        - 외부 데이터 형식 : 외부 시스템에서 받는 데이터는 JSON 형식
        - 내부 데이터 저장 형식 : 내부 시스템에서 저장하는 데이터를 주문/배송/결제 각 정의된 class에 맞게 저장
        - 데이터 전송 형식 : 저장된 데이터를 외부시스템으로 전송할 시 받아왔던 JSON 형식으로 변환
    3. 인터페이스
        - 외부 데이터 받아서 저장 : Get()
        - 내부 데이터 조회해서 클라이언트 전송 : Post()
        - 내부 데이터 외부 시스템 전송 : Post()

    4. 예외 처리
        - 외부시스템에서 오류 발생, 백엔드 서버 오류, 잘못된 요청 등의 케이스로 나누어 예외처리필요

1. 비기능적 요구사항(Non-functional requirements)
    1. 모듈 테스트
    2. 응답 시간
    3. 시스템 성능
    4. 확장성


## 클래스 다이어그램 설계

### 주문정보 수신 및 송신을 위한 각 클래스 설계
    - 주문데이터를 관리하는 것이 가장 중요한 요구사항이므로 주문 정보 클래스를 가장 먼저 구성하고, 실무에서 결제의 경우 주문번호와 같은 ID를 이용하여 PG사의 시스템에서 별도로 조회해야하고 배송정보 역시 택배사에 전달하기 전 과정은 직접 관리가 가능하지만 그 이후 진행상황은 송장번호를 통해 배송시스템을 조회해야하므로 추가적인 api 요청을 통해 관리될 가능성이 높으므로 각각 별도 클래스로 구성하였습니다.

### 추가 클래스 관련
    - 주문자 정보 : 주문자 ID 기반으로 주문자 정보를 관리합니다.
    - 주문기록 정보 : 주문자 ID 기반으로 주문기록을 조회합니다.
    - CS 정보 : 주문의 문의사항 등 CS업무와 관련된 정보를 저장 및 업데이트합니다.
    
### 클래스 다이어그램 작성
    - vscode 환경에서 plantUML 파일로 작성했습니다.
    - 한 명의 Customer가 다수의 주문을 생성할 수 있고, 한 주문이 취소된 결제내역을 포함하여 다수의 Payment를 가질 수 있도록 하였습니다. Shipping의 경우 하나의 주문에 하나만 연결되도록 하였습니다.
    - 주문,배송 상태나 결제방법 등은 Enum으로 관리되도록 하였습니다. 


## 인터페이스 정의

### 인터페이스 주체(actor)
    1. 백엔드 서버
    2. 외부 시스템
    3. 클라이언트

### API 호출상황 및 엔드포인트
    - 외부 주문데이터 수신 : /{외부 시스템 엔드포인트 호출} 
    - 내부 주문데이터 생성 : /order (POST)
    - 내부 주문데이터 전체 조회 : /order (GET)
    - 내부 주문데이터 단일/리스트 조회(주문 ID/고객 ID) : /order?orderID={orderID} (GET)
    /order?customerID={customerID} (GET)

## 시스템 구현

### Nest.js 프로젝트 생성
    - example을 clone하거나 boilerplate를 이용해서 시작하지않고 코드와 패키지 등을 좀 더 섬세하게 컨트롤 할 수 있도록 직접 프로젝트를 생성하였습니다.
    - 프로젝트 초기 설정 : 
        패키지 매니저 설정 : ```pnpm init```
        nestjs 필수 패키지 설치 : nestjs/common, nestjs/core, nestjs/platform-express, reflect-metadata, typscript
        typescript 설정 : experimetalDecorators를 true로 설정하여 Typescript가 @Controller()와 같은 데코레이터를 활용할 수 있도록 하고, emitDecoratorMetadata를 true로 설정하여 클래스 의존성 처리를 할 수 있도록 설정했습니다.

### 모듈,컨트롤러 생성

### 엔드포인트 별 로직 구현

### 예외 처리 작업
