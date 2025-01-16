export type PumpLaunchpad = {
  version: "0.1.0";
  name: "pump_launchpad";
  instructions: [
    {
      name: "initialize";
      accounts: [
        {
          name: "global";
          isMut: true;
          isSigner: false;
        },
        {
          name: "user";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: "setParams";
      accounts: [
        {
          name: "global";
          isMut: true;
          isSigner: false;
        },
        {
          name: "user";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: "args";
          type: {
            defined: "SetParamsArgs";
          };
        },
      ];
    },
    {
      name: "create";
      accounts: [
        {
          name: "user";
          isMut: true;
          isSigner: true;
        },
        {
          name: "global";
          isMut: true;
          isSigner: false;
        },
        {
          name: "launch";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenMint";
          isMut: true;
          isSigner: false;
        },
        {
          name: "metadata";
          isMut: true;
          isSigner: false;
        },
        {
          name: "associatedLaunch";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenMetadataProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "associatedTokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: "args";
          type: {
            defined: "CreateArgs";
          };
        },
      ];
    },
    {
      name: "fund";
      accounts: [
        {
          name: "user";
          isMut: true;
          isSigner: true;
        },
        {
          name: "global";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payAssociatedUser";
          isMut: true;
          isSigner: false;
        },
        {
          name: "launch";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payAssociatedLaunch";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payTokenMint";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: "args";
          type: {
            defined: "FundArgs";
          };
        },
      ];
    },
    {
      name: "editWl";
      accounts: [
        {
          name: "user";
          isMut: true;
          isSigner: true;
        },
        {
          name: "global";
          isMut: false;
          isSigner: false;
        },
        {
          name: "launch";
          isMut: true;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: "args";
          type: {
            defined: "EditWlArgs";
          };
        },
      ];
    },
    {
      name: "buy";
      accounts: [
        {
          name: "user";
          isMut: true;
          isSigner: true;
        },
        {
          name: "allocation";
          isMut: true;
          isSigner: false;
        },
        {
          name: "global";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payAssociatedUser";
          isMut: true;
          isSigner: false;
        },
        {
          name: "launch";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payTokenMint";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payAssociatedLaunch";
          isMut: true;
          isSigner: false;
        },
        {
          name: "feeRecipient";
          isMut: true;
          isSigner: false;
        },
        {
          name: "associatedTokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: "args";
          type: {
            defined: "BuyArgs";
          };
        },
      ];
    },
    {
      name: "sell";
      accounts: [
        {
          name: "user";
          isMut: true;
          isSigner: true;
        },
        {
          name: "allocation";
          isMut: true;
          isSigner: false;
        },
        {
          name: "global";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payAssociatedUser";
          isMut: true;
          isSigner: false;
        },
        {
          name: "launch";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payTokenMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payAssociatedLaunch";
          isMut: true;
          isSigner: false;
        },
        {
          name: "feeRecipient";
          isMut: true;
          isSigner: false;
        },
        {
          name: "associatedTokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: "args";
          type: {
            defined: "SellArgs";
          };
        },
      ];
    },
    {
      name: "claim";
      accounts: [
        {
          name: "user";
          isMut: true;
          isSigner: true;
        },
        {
          name: "allocation";
          isMut: true;
          isSigner: false;
        },
        {
          name: "global";
          isMut: true;
          isSigner: false;
        },
        {
          name: "associatedUser";
          isMut: true;
          isSigner: false;
        },
        {
          name: "launch";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "associatedLaunch";
          isMut: true;
          isSigner: false;
        },
        {
          name: "associatedTokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: "withdraw";
      accounts: [
        {
          name: "user";
          isMut: true;
          isSigner: true;
        },
        {
          name: "global";
          isMut: true;
          isSigner: false;
        },
        {
          name: "associatedUser";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payAssociatedUser";
          isMut: true;
          isSigner: false;
        },
        {
          name: "launch";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payTokenMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "associatedLaunch";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payAssociatedLaunch";
          isMut: true;
          isSigner: false;
        },
        {
          name: "associatedTokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: "collect";
      accounts: [
        {
          name: "user";
          isMut: true;
          isSigner: true;
        },
        {
          name: "associatedUser";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "collect";
          isMut: false;
          isSigner: false;
        },
        {
          name: "associatedCollect";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: "id";
          type: "u8";
        },
      ];
    },
    {
      name: "update";
      accounts: [
        {
          name: "user";
          isMut: true;
          isSigner: true;
        },
        {
          name: "launch";
          isMut: true;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: "delete";
      accounts: [
        {
          name: "user";
          isMut: true;
          isSigner: true;
        },
        {
          name: "launch";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: "stake";
      accounts: [
        {
          name: "user";
          isMut: true;
          isSigner: true;
        },
        {
          name: "tokenMint";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "associatedVault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "associatedUser";
          isMut: true;
          isSigner: false;
        },
        {
          name: "associatedTokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        },
      ];
    },
    {
      name: "unstake";
      accounts: [
        {
          name: "user";
          isMut: true;
          isSigner: true;
        },
        {
          name: "tokenMint";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "associatedVault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "associatedUser";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "associatedTokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
  ];
  accounts: [
    {
      name: "allocation";
      type: {
        kind: "struct";
        fields: [
          {
            name: "initialized";
            type: "bool";
          },
          {
            name: "id";
            type: "u32";
          },
          {
            name: "user";
            type: "publicKey";
          },
          {
            name: "tokenAmount";
            type: "u64";
          },
          {
            name: "claimed";
            type: "bool";
          },
          {
            name: "bump";
            type: "u8";
          },
        ];
      };
    },
    {
      name: "global";
      type: {
        kind: "struct";
        fields: [
          {
            name: "initialized";
            type: "bool";
          },
          {
            name: "authority";
            type: "publicKey";
          },
          {
            name: "feeRecipient";
            type: "publicKey";
          },
          {
            name: "feeBasisPoints";
            type: "u16";
          },
          {
            name: "tokens";
            type: "u32";
          },
          {
            name: "maxSupply";
            type: "u64";
          },
          {
            name: "price";
            type: "u64";
          },
          {
            name: "wlDuration";
            type: "i64";
          },
          {
            name: "bump";
            type: "u8";
          },
        ];
      };
    },
    {
      name: "launch";
      type: {
        kind: "struct";
        fields: [
          {
            name: "id";
            type: "u32";
          },
          {
            name: "tokenMint";
            type: "publicKey";
          },
          {
            name: "creator";
            type: "publicKey";
          },
          {
            name: "maxSupply";
            type: "u64";
          },
          {
            name: "soldSupply";
            type: "u64";
          },
          {
            name: "price";
            type: "u64";
          },
          {
            name: "feeCollected";
            type: "u64";
          },
          {
            name: "completed";
            type: "bool";
          },
          {
            name: "withdrawn";
            type: "bool";
          },
          {
            name: "startTime";
            type: "i64";
          },
          {
            name: "wlDuration";
            type: "i64";
          },
          {
            name: "merkleRoot";
            type: {
              option: {
                array: ["u8", 32];
              };
            };
          },
          {
            name: "name";
            type: "string";
          },
          {
            name: "symbol";
            type: "string";
          },
          {
            name: "uri";
            type: "string";
          },
          {
            name: "bump";
            type: "u8";
          },
          {
            name: "creatorBuyAmount";
            type: "u64";
          },
          {
            name: "curated";
            type: "bool";
          },
          {
            name: "maxBuyAmount";
            type: "u64";
          },
        ];
      };
    },
    {
      name: "vault";
      type: {
        kind: "struct";
        fields: [
          {
            name: "user";
            type: "publicKey";
          },
          {
            name: "amount";
            type: "u64";
          },
          {
            name: "startTime";
            type: "i64";
          },
        ];
      };
    },
  ];
  types: [
    {
      name: "BuyArgs";
      type: {
        kind: "struct";
        fields: [
          {
            name: "tokenAmount";
            type: "u64";
          },
          {
            name: "allocation";
            type: {
              option: "u64";
            };
          },
          {
            name: "proof";
            type: {
              option: {
                vec: {
                  array: ["u8", 32];
                };
              };
            };
          },
        ];
      };
    },
    {
      name: "CreateArgs";
      type: {
        kind: "struct";
        fields: [
          {
            name: "name";
            type: "string";
          },
          {
            name: "symbol";
            type: "string";
          },
          {
            name: "uri";
            type: "string";
          },
          {
            name: "merkleRoot";
            type: {
              option: {
                array: ["u8", 32];
              };
            };
          },
          {
            name: "startTime";
            type: "i64";
          },
          {
            name: "maxBuyAmount";
            type: "u64";
          },
        ];
      };
    },
    {
      name: "EditWlArgs";
      type: {
        kind: "struct";
        fields: [
          {
            name: "merkleRoot";
            type: {
              array: ["u8", 32];
            };
          },
        ];
      };
    },
    {
      name: "FundArgs";
      type: {
        kind: "struct";
        fields: [
          {
            name: "creatorBuyAmount";
            type: "u64";
          },
        ];
      };
    },
    {
      name: "SellArgs";
      type: {
        kind: "struct";
        fields: [
          {
            name: "tokenAmount";
            type: "u64";
          },
        ];
      };
    },
    {
      name: "SetParamsArgs";
      type: {
        kind: "struct";
        fields: [
          {
            name: "authority";
            type: "publicKey";
          },
          {
            name: "feeRecipient";
            type: "publicKey";
          },
          {
            name: "feeBasisPoints";
            type: "u16";
          },
          {
            name: "maxSupply";
            type: "u64";
          },
          {
            name: "price";
            type: "u64";
          },
          {
            name: "wlDuration";
            type: "i64";
          },
          {
            name: "initialized";
            type: "bool";
          },
        ];
      };
    },
  ];
  events: [
    {
      name: "LaunchCompleted";
      fields: [
        {
          name: "id";
          type: "u32";
          index: false;
        },
      ];
    },
    {
      name: "StakeEvent";
      fields: [
        {
          name: "owner";
          type: "publicKey";
          index: false;
        },
        {
          name: "amount";
          type: "u64";
          index: false;
        },
        {
          name: "unlockTimestamp";
          type: "i64";
          index: false;
        },
      ];
    },
    {
      name: "TokenTraded";
      fields: [
        {
          name: "isBuy";
          type: "bool";
          index: false;
        },
        {
          name: "id";
          type: "u32";
          index: false;
        },
        {
          name: "user";
          type: "publicKey";
          index: false;
        },
        {
          name: "tokenAmount";
          type: "u64";
          index: false;
        },
        {
          name: "soldSupply";
          type: "u64";
          index: false;
        },
      ];
    },
    {
      name: "UnstakeEvent";
      fields: [
        {
          name: "owner";
          type: "publicKey";
          index: false;
        },
        {
          name: "amount";
          type: "u64";
          index: false;
        },
      ];
    },
  ];
  errors: [
    {
      code: 6000;
      name: "InvalidUser";
      msg: "Invalid user";
    },
    {
      code: 6001;
      name: "GlobalNotInitialized";
      msg: "Global not initialized";
    },
    {
      code: 6002;
      name: "MaxSupplyExceeded";
      msg: "Max supply exceeded";
    },
    {
      code: 6003;
      name: "ArithmeticError";
      msg: "Arithmetic error";
    },
    {
      code: 6004;
      name: "InsufficientFunds";
      msg: "Insufficient funds";
    },
    {
      code: 6005;
      name: "LaunchCompleted";
      msg: "Launch is completed";
    },
    {
      code: 6006;
      name: "LaunchNotCompleted";
      msg: "Launch is not completed";
    },
    {
      code: 6007;
      name: "LaunchWithdrawn";
      msg: "Launch is withdrawn";
    },
    {
      code: 6008;
      name: "LaunchNotWithdrawn";
      msg: "Launch not withdrawn";
    },
    {
      code: 6009;
      name: "InvalidFeeRecipient";
      msg: "Invalid fee receipient";
    },
    {
      code: 6010;
      name: "NotWhitelisted";
      msg: "Not whitelised";
    },
    {
      code: 6011;
      name: "ExceededAllocation";
      msg: "Allocation excedded";
    },
    {
      code: 6012;
      name: "NotAllowedDuringWhitelist";
      msg: "Not allowed to sell during whitelist";
    },
    {
      code: 6013;
      name: "AllocationNotFound";
      msg: "Allocation not found";
    },
    {
      code: 6014;
      name: "AllocationArgNotFound";
      msg: "Allocation arg not found";
    },
    {
      code: 6015;
      name: "ProofArgNotFound";
      msg: "Proof arg not found";
    },
    {
      code: 6016;
      name: "LaunchNotStarted";
      msg: "Launch not started";
    },
    {
      code: 6017;
      name: "WhitelistNotSet";
      msg: "Whitelist not set";
    },
    {
      code: 6018;
      name: "WhitelistStarted";
      msg: "Whitelist started";
    },
    {
      code: 6019;
      name: "AllocationClaimed";
      msg: "Allocation claimed";
    },
    {
      code: 6020;
      name: "InvalidBuyAmount";
      msg: "Invalid buy amount";
    },
    {
      code: 6021;
      name: "AlreadyFunded";
      msg: "Already funded";
    },
    {
      code: 6022;
      name: "LaunchStarted";
      msg: "Launch started";
    },
    {
      code: 6023;
      name: "StakeLocked";
      msg: "Cannot unstake before lock period ends";
    },
    {
      code: 6024;
      name: "InvalidAmount";
      msg: "Amount should be more than 0";
    },
    {
      code: 6025;
      name: "InvalidStartTime";
      msg: "Invalid start time";
    },
  ];
};

export const IDL: PumpLaunchpad = {
  version: "0.1.0",
  name: "pump_launchpad",
  instructions: [
    {
      name: "initialize",
      accounts: [
        {
          name: "global",
          isMut: true,
          isSigner: false,
        },
        {
          name: "user",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "setParams",
      accounts: [
        {
          name: "global",
          isMut: true,
          isSigner: false,
        },
        {
          name: "user",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "args",
          type: {
            defined: "SetParamsArgs",
          },
        },
      ],
    },
    {
      name: "create",
      accounts: [
        {
          name: "user",
          isMut: true,
          isSigner: true,
        },
        {
          name: "global",
          isMut: true,
          isSigner: false,
        },
        {
          name: "launch",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenMint",
          isMut: true,
          isSigner: false,
        },
        {
          name: "metadata",
          isMut: true,
          isSigner: false,
        },
        {
          name: "associatedLaunch",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenMetadataProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "associatedTokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "args",
          type: {
            defined: "CreateArgs",
          },
        },
      ],
    },
    {
      name: "fund",
      accounts: [
        {
          name: "user",
          isMut: true,
          isSigner: true,
        },
        {
          name: "global",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payAssociatedUser",
          isMut: true,
          isSigner: false,
        },
        {
          name: "launch",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payAssociatedLaunch",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payTokenMint",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "args",
          type: {
            defined: "FundArgs",
          },
        },
      ],
    },
    {
      name: "editWl",
      accounts: [
        {
          name: "user",
          isMut: true,
          isSigner: true,
        },
        {
          name: "global",
          isMut: false,
          isSigner: false,
        },
        {
          name: "launch",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "args",
          type: {
            defined: "EditWlArgs",
          },
        },
      ],
    },
    {
      name: "buy",
      accounts: [
        {
          name: "user",
          isMut: true,
          isSigner: true,
        },
        {
          name: "allocation",
          isMut: true,
          isSigner: false,
        },
        {
          name: "global",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payAssociatedUser",
          isMut: true,
          isSigner: false,
        },
        {
          name: "launch",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payTokenMint",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payAssociatedLaunch",
          isMut: true,
          isSigner: false,
        },
        {
          name: "feeRecipient",
          isMut: true,
          isSigner: false,
        },
        {
          name: "associatedTokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "args",
          type: {
            defined: "BuyArgs",
          },
        },
      ],
    },
    {
      name: "sell",
      accounts: [
        {
          name: "user",
          isMut: true,
          isSigner: true,
        },
        {
          name: "allocation",
          isMut: true,
          isSigner: false,
        },
        {
          name: "global",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payAssociatedUser",
          isMut: true,
          isSigner: false,
        },
        {
          name: "launch",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payTokenMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payAssociatedLaunch",
          isMut: true,
          isSigner: false,
        },
        {
          name: "feeRecipient",
          isMut: true,
          isSigner: false,
        },
        {
          name: "associatedTokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "args",
          type: {
            defined: "SellArgs",
          },
        },
      ],
    },
    {
      name: "claim",
      accounts: [
        {
          name: "user",
          isMut: true,
          isSigner: true,
        },
        {
          name: "allocation",
          isMut: true,
          isSigner: false,
        },
        {
          name: "global",
          isMut: true,
          isSigner: false,
        },
        {
          name: "associatedUser",
          isMut: true,
          isSigner: false,
        },
        {
          name: "launch",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "associatedLaunch",
          isMut: true,
          isSigner: false,
        },
        {
          name: "associatedTokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "withdraw",
      accounts: [
        {
          name: "user",
          isMut: true,
          isSigner: true,
        },
        {
          name: "global",
          isMut: true,
          isSigner: false,
        },
        {
          name: "associatedUser",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payAssociatedUser",
          isMut: true,
          isSigner: false,
        },
        {
          name: "launch",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payTokenMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "associatedLaunch",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payAssociatedLaunch",
          isMut: true,
          isSigner: false,
        },
        {
          name: "associatedTokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "collect",
      accounts: [
        {
          name: "user",
          isMut: true,
          isSigner: true,
        },
        {
          name: "associatedUser",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "collect",
          isMut: false,
          isSigner: false,
        },
        {
          name: "associatedCollect",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "id",
          type: "u8",
        },
      ],
    },
    {
      name: "update",
      accounts: [
        {
          name: "user",
          isMut: true,
          isSigner: true,
        },
        {
          name: "launch",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "delete",
      accounts: [
        {
          name: "user",
          isMut: true,
          isSigner: true,
        },
        {
          name: "launch",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "stake",
      accounts: [
        {
          name: "user",
          isMut: true,
          isSigner: true,
        },
        {
          name: "tokenMint",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "associatedVault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "associatedUser",
          isMut: true,
          isSigner: false,
        },
        {
          name: "associatedTokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "unstake",
      accounts: [
        {
          name: "user",
          isMut: true,
          isSigner: true,
        },
        {
          name: "tokenMint",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "associatedVault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "associatedUser",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "associatedTokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
  ],
  accounts: [
    {
      name: "allocation",
      type: {
        kind: "struct",
        fields: [
          {
            name: "initialized",
            type: "bool",
          },
          {
            name: "id",
            type: "u32",
          },
          {
            name: "user",
            type: "publicKey",
          },
          {
            name: "tokenAmount",
            type: "u64",
          },
          {
            name: "claimed",
            type: "bool",
          },
          {
            name: "bump",
            type: "u8",
          },
        ],
      },
    },
    {
      name: "global",
      type: {
        kind: "struct",
        fields: [
          {
            name: "initialized",
            type: "bool",
          },
          {
            name: "authority",
            type: "publicKey",
          },
          {
            name: "feeRecipient",
            type: "publicKey",
          },
          {
            name: "feeBasisPoints",
            type: "u16",
          },
          {
            name: "tokens",
            type: "u32",
          },
          {
            name: "maxSupply",
            type: "u64",
          },
          {
            name: "price",
            type: "u64",
          },
          {
            name: "wlDuration",
            type: "i64",
          },
          {
            name: "bump",
            type: "u8",
          },
        ],
      },
    },
    {
      name: "launch",
      type: {
        kind: "struct",
        fields: [
          {
            name: "id",
            type: "u32",
          },
          {
            name: "tokenMint",
            type: "publicKey",
          },
          {
            name: "creator",
            type: "publicKey",
          },
          {
            name: "maxSupply",
            type: "u64",
          },
          {
            name: "soldSupply",
            type: "u64",
          },
          {
            name: "price",
            type: "u64",
          },
          {
            name: "feeCollected",
            type: "u64",
          },
          {
            name: "completed",
            type: "bool",
          },
          {
            name: "withdrawn",
            type: "bool",
          },
          {
            name: "startTime",
            type: "i64",
          },
          {
            name: "wlDuration",
            type: "i64",
          },
          {
            name: "merkleRoot",
            type: {
              option: {
                array: ["u8", 32],
              },
            },
          },
          {
            name: "name",
            type: "string",
          },
          {
            name: "symbol",
            type: "string",
          },
          {
            name: "uri",
            type: "string",
          },
          {
            name: "bump",
            type: "u8",
          },
          {
            name: "creatorBuyAmount",
            type: "u64",
          },
          {
            name: "curated",
            type: "bool",
          },
          {
            name: "maxBuyAmount",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "vault",
      type: {
        kind: "struct",
        fields: [
          {
            name: "user",
            type: "publicKey",
          },
          {
            name: "amount",
            type: "u64",
          },
          {
            name: "startTime",
            type: "i64",
          },
        ],
      },
    },
  ],
  types: [
    {
      name: "BuyArgs",
      type: {
        kind: "struct",
        fields: [
          {
            name: "tokenAmount",
            type: "u64",
          },
          {
            name: "allocation",
            type: {
              option: "u64",
            },
          },
          {
            name: "proof",
            type: {
              option: {
                vec: {
                  array: ["u8", 32],
                },
              },
            },
          },
        ],
      },
    },
    {
      name: "CreateArgs",
      type: {
        kind: "struct",
        fields: [
          {
            name: "name",
            type: "string",
          },
          {
            name: "symbol",
            type: "string",
          },
          {
            name: "uri",
            type: "string",
          },
          {
            name: "merkleRoot",
            type: {
              option: {
                array: ["u8", 32],
              },
            },
          },
          {
            name: "startTime",
            type: "i64",
          },
          {
            name: "maxBuyAmount",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "EditWlArgs",
      type: {
        kind: "struct",
        fields: [
          {
            name: "merkleRoot",
            type: {
              array: ["u8", 32],
            },
          },
        ],
      },
    },
    {
      name: "FundArgs",
      type: {
        kind: "struct",
        fields: [
          {
            name: "creatorBuyAmount",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "SellArgs",
      type: {
        kind: "struct",
        fields: [
          {
            name: "tokenAmount",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "SetParamsArgs",
      type: {
        kind: "struct",
        fields: [
          {
            name: "authority",
            type: "publicKey",
          },
          {
            name: "feeRecipient",
            type: "publicKey",
          },
          {
            name: "feeBasisPoints",
            type: "u16",
          },
          {
            name: "maxSupply",
            type: "u64",
          },
          {
            name: "price",
            type: "u64",
          },
          {
            name: "wlDuration",
            type: "i64",
          },
          {
            name: "initialized",
            type: "bool",
          },
        ],
      },
    },
  ],
  events: [
    {
      name: "LaunchCompleted",
      fields: [
        {
          name: "id",
          type: "u32",
          index: false,
        },
      ],
    },
    {
      name: "StakeEvent",
      fields: [
        {
          name: "owner",
          type: "publicKey",
          index: false,
        },
        {
          name: "amount",
          type: "u64",
          index: false,
        },
        {
          name: "unlockTimestamp",
          type: "i64",
          index: false,
        },
      ],
    },
    {
      name: "TokenTraded",
      fields: [
        {
          name: "isBuy",
          type: "bool",
          index: false,
        },
        {
          name: "id",
          type: "u32",
          index: false,
        },
        {
          name: "user",
          type: "publicKey",
          index: false,
        },
        {
          name: "tokenAmount",
          type: "u64",
          index: false,
        },
        {
          name: "soldSupply",
          type: "u64",
          index: false,
        },
      ],
    },
    {
      name: "UnstakeEvent",
      fields: [
        {
          name: "owner",
          type: "publicKey",
          index: false,
        },
        {
          name: "amount",
          type: "u64",
          index: false,
        },
      ],
    },
  ],
  errors: [
    {
      code: 6000,
      name: "InvalidUser",
      msg: "Invalid user",
    },
    {
      code: 6001,
      name: "GlobalNotInitialized",
      msg: "Global not initialized",
    },
    {
      code: 6002,
      name: "MaxSupplyExceeded",
      msg: "Max supply exceeded",
    },
    {
      code: 6003,
      name: "ArithmeticError",
      msg: "Arithmetic error",
    },
    {
      code: 6004,
      name: "InsufficientFunds",
      msg: "Insufficient funds",
    },
    {
      code: 6005,
      name: "LaunchCompleted",
      msg: "Launch is completed",
    },
    {
      code: 6006,
      name: "LaunchNotCompleted",
      msg: "Launch is not completed",
    },
    {
      code: 6007,
      name: "LaunchWithdrawn",
      msg: "Launch is withdrawn",
    },
    {
      code: 6008,
      name: "LaunchNotWithdrawn",
      msg: "Launch not withdrawn",
    },
    {
      code: 6009,
      name: "InvalidFeeRecipient",
      msg: "Invalid fee receipient",
    },
    {
      code: 6010,
      name: "NotWhitelisted",
      msg: "Not whitelised",
    },
    {
      code: 6011,
      name: "ExceededAllocation",
      msg: "Allocation excedded",
    },
    {
      code: 6012,
      name: "NotAllowedDuringWhitelist",
      msg: "Not allowed to sell during whitelist",
    },
    {
      code: 6013,
      name: "AllocationNotFound",
      msg: "Allocation not found",
    },
    {
      code: 6014,
      name: "AllocationArgNotFound",
      msg: "Allocation arg not found",
    },
    {
      code: 6015,
      name: "ProofArgNotFound",
      msg: "Proof arg not found",
    },
    {
      code: 6016,
      name: "LaunchNotStarted",
      msg: "Launch not started",
    },
    {
      code: 6017,
      name: "WhitelistNotSet",
      msg: "Whitelist not set",
    },
    {
      code: 6018,
      name: "WhitelistStarted",
      msg: "Whitelist started",
    },
    {
      code: 6019,
      name: "AllocationClaimed",
      msg: "Allocation claimed",
    },
    {
      code: 6020,
      name: "InvalidBuyAmount",
      msg: "Invalid buy amount",
    },
    {
      code: 6021,
      name: "AlreadyFunded",
      msg: "Already funded",
    },
    {
      code: 6022,
      name: "LaunchStarted",
      msg: "Launch started",
    },
    {
      code: 6023,
      name: "StakeLocked",
      msg: "Cannot unstake before lock period ends",
    },
    {
      code: 6024,
      name: "InvalidAmount",
      msg: "Amount should be more than 0",
    },
    {
      code: 6025,
      name: "InvalidStartTime",
      msg: "Invalid start time",
    },
  ],
};
