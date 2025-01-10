/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface MemeFactoryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "WETH"
      | "createMeme"
      | "creationFee"
      | "fee"
      | "feeTo"
      | "initialize"
      | "listingFee"
      | "owner"
      | "renounceOwnership"
      | "setCreationFee"
      | "setFee"
      | "setFeeTo"
      | "setListingFee"
      | "transferOwnership"
      | "uniswapV2Factory"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "CreationFeeSet"
      | "FeeSet"
      | "FeeToSet"
      | "Initialized"
      | "ListingFeeSet"
      | "MemeCreated"
      | "OwnershipTransferred"
      | "SaleAmountSet"
  ): EventFragment;

  encodeFunctionData(functionFragment: "WETH", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "createMeme",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "creationFee",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "fee", values?: undefined): string;
  encodeFunctionData(functionFragment: "feeTo", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      AddressLike,
      AddressLike,
      AddressLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "listingFee",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setCreationFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeTo",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setListingFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "uniswapV2Factory",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "WETH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "createMeme", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "creationFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "feeTo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "listingFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCreationFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setFeeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setListingFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uniswapV2Factory",
    data: BytesLike
  ): Result;
}

export namespace CreationFeeSetEvent {
  export type InputTuple = [creationFee: BigNumberish];
  export type OutputTuple = [creationFee: bigint];
  export interface OutputObject {
    creationFee: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FeeSetEvent {
  export type InputTuple = [fee: BigNumberish];
  export type OutputTuple = [fee: bigint];
  export interface OutputObject {
    fee: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FeeToSetEvent {
  export type InputTuple = [feeTo: AddressLike];
  export type OutputTuple = [feeTo: string];
  export interface OutputObject {
    feeTo: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ListingFeeSetEvent {
  export type InputTuple = [listingFee: BigNumberish];
  export type OutputTuple = [listingFee: bigint];
  export interface OutputObject {
    listingFee: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MemeCreatedEvent {
  export type InputTuple = [
    meme: AddressLike,
    creator: AddressLike,
    totalSupply: BigNumberish,
    saleAmount: BigNumberish,
    tokenOffset: BigNumberish,
    nativeOffset: BigNumberish,
    tokenId: BigNumberish
  ];
  export type OutputTuple = [
    meme: string,
    creator: string,
    totalSupply: bigint,
    saleAmount: bigint,
    tokenOffset: bigint,
    nativeOffset: bigint,
    tokenId: bigint
  ];
  export interface OutputObject {
    meme: string;
    creator: string;
    totalSupply: bigint;
    saleAmount: bigint;
    tokenOffset: bigint;
    nativeOffset: bigint;
    tokenId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SaleAmountSetEvent {
  export type InputTuple = [saleAmount: BigNumberish];
  export type OutputTuple = [saleAmount: bigint];
  export interface OutputObject {
    saleAmount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface MemeFactory extends BaseContract {
  connect(runner?: ContractRunner | null): MemeFactory;
  waitForDeployment(): Promise<this>;

  interface: MemeFactoryInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  WETH: TypedContractMethod<[], [string], "view">;

  createMeme: TypedContractMethod<
    [
      _name: string,
      _symbol: string,
      _tokenId: BigNumberish,
      _tokenOffset: BigNumberish,
      _nativeOffset: BigNumberish,
      _totalSupply: BigNumberish,
      _saleAmount: BigNumberish
    ],
    [string],
    "payable"
  >;

  creationFee: TypedContractMethod<[], [bigint], "view">;

  fee: TypedContractMethod<[], [bigint], "view">;

  feeTo: TypedContractMethod<[], [string], "view">;

  initialize: TypedContractMethod<
    [
      _feeTo: AddressLike,
      _fee: BigNumberish,
      _creationFee: BigNumberish,
      _listingFee: BigNumberish,
      owner: AddressLike,
      _univ2Factory: AddressLike,
      _weth: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  listingFee: TypedContractMethod<[], [bigint], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  setCreationFee: TypedContractMethod<
    [_creationFee: BigNumberish],
    [void],
    "nonpayable"
  >;

  setFee: TypedContractMethod<[_fee: BigNumberish], [void], "nonpayable">;

  setFeeTo: TypedContractMethod<[_feeTo: AddressLike], [void], "nonpayable">;

  setListingFee: TypedContractMethod<
    [_listingFee: BigNumberish],
    [void],
    "nonpayable"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  uniswapV2Factory: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "WETH"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "createMeme"
  ): TypedContractMethod<
    [
      _name: string,
      _symbol: string,
      _tokenId: BigNumberish,
      _tokenOffset: BigNumberish,
      _nativeOffset: BigNumberish,
      _totalSupply: BigNumberish,
      _saleAmount: BigNumberish
    ],
    [string],
    "payable"
  >;
  getFunction(
    nameOrSignature: "creationFee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "fee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "feeTo"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [
      _feeTo: AddressLike,
      _fee: BigNumberish,
      _creationFee: BigNumberish,
      _listingFee: BigNumberish,
      owner: AddressLike,
      _univ2Factory: AddressLike,
      _weth: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "listingFee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setCreationFee"
  ): TypedContractMethod<[_creationFee: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setFee"
  ): TypedContractMethod<[_fee: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setFeeTo"
  ): TypedContractMethod<[_feeTo: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setListingFee"
  ): TypedContractMethod<[_listingFee: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "uniswapV2Factory"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "CreationFeeSet"
  ): TypedContractEvent<
    CreationFeeSetEvent.InputTuple,
    CreationFeeSetEvent.OutputTuple,
    CreationFeeSetEvent.OutputObject
  >;
  getEvent(
    key: "FeeSet"
  ): TypedContractEvent<
    FeeSetEvent.InputTuple,
    FeeSetEvent.OutputTuple,
    FeeSetEvent.OutputObject
  >;
  getEvent(
    key: "FeeToSet"
  ): TypedContractEvent<
    FeeToSetEvent.InputTuple,
    FeeToSetEvent.OutputTuple,
    FeeToSetEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "ListingFeeSet"
  ): TypedContractEvent<
    ListingFeeSetEvent.InputTuple,
    ListingFeeSetEvent.OutputTuple,
    ListingFeeSetEvent.OutputObject
  >;
  getEvent(
    key: "MemeCreated"
  ): TypedContractEvent<
    MemeCreatedEvent.InputTuple,
    MemeCreatedEvent.OutputTuple,
    MemeCreatedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "SaleAmountSet"
  ): TypedContractEvent<
    SaleAmountSetEvent.InputTuple,
    SaleAmountSetEvent.OutputTuple,
    SaleAmountSetEvent.OutputObject
  >;

  filters: {
    "CreationFeeSet(uint256)": TypedContractEvent<
      CreationFeeSetEvent.InputTuple,
      CreationFeeSetEvent.OutputTuple,
      CreationFeeSetEvent.OutputObject
    >;
    CreationFeeSet: TypedContractEvent<
      CreationFeeSetEvent.InputTuple,
      CreationFeeSetEvent.OutputTuple,
      CreationFeeSetEvent.OutputObject
    >;

    "FeeSet(uint256)": TypedContractEvent<
      FeeSetEvent.InputTuple,
      FeeSetEvent.OutputTuple,
      FeeSetEvent.OutputObject
    >;
    FeeSet: TypedContractEvent<
      FeeSetEvent.InputTuple,
      FeeSetEvent.OutputTuple,
      FeeSetEvent.OutputObject
    >;

    "FeeToSet(address)": TypedContractEvent<
      FeeToSetEvent.InputTuple,
      FeeToSetEvent.OutputTuple,
      FeeToSetEvent.OutputObject
    >;
    FeeToSet: TypedContractEvent<
      FeeToSetEvent.InputTuple,
      FeeToSetEvent.OutputTuple,
      FeeToSetEvent.OutputObject
    >;

    "Initialized(uint64)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "ListingFeeSet(uint256)": TypedContractEvent<
      ListingFeeSetEvent.InputTuple,
      ListingFeeSetEvent.OutputTuple,
      ListingFeeSetEvent.OutputObject
    >;
    ListingFeeSet: TypedContractEvent<
      ListingFeeSetEvent.InputTuple,
      ListingFeeSetEvent.OutputTuple,
      ListingFeeSetEvent.OutputObject
    >;

    "MemeCreated(address,address,uint256,uint256,uint256,uint256,uint256)": TypedContractEvent<
      MemeCreatedEvent.InputTuple,
      MemeCreatedEvent.OutputTuple,
      MemeCreatedEvent.OutputObject
    >;
    MemeCreated: TypedContractEvent<
      MemeCreatedEvent.InputTuple,
      MemeCreatedEvent.OutputTuple,
      MemeCreatedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "SaleAmountSet(uint256)": TypedContractEvent<
      SaleAmountSetEvent.InputTuple,
      SaleAmountSetEvent.OutputTuple,
      SaleAmountSetEvent.OutputObject
    >;
    SaleAmountSet: TypedContractEvent<
      SaleAmountSetEvent.InputTuple,
      SaleAmountSetEvent.OutputTuple,
      SaleAmountSetEvent.OutputObject
    >;
  };
}
