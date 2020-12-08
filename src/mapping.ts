import { BigInt } from "@graphprotocol/graph-ts"
import {
  Contract,
  UpgradeProposal,
  Transfer,
  Approval
} from "../generated/Contract/Contract"

import {Transferr,Approvall} from "../generated/schema"

export function handleUpgradeProposal(event: UpgradeProposal): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  //let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  //if (entity == null) {
    //entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    //entity.count = BigInt.fromI32(0)
  //}

  // BigInt and BigDecimal math are supported
  //entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  //entity.newVersion = event.params.newVersion

  // Entities can be written to the store with `.save()`
  //entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.multiAsset(...)
  // - contract.name(...)
  // - contract.approve(...)
  // - contract.commitUpgrade(...)
  // - contract.getLatestVersion(...)
  // - contract._forwardTransferFromWithReference(...)
  // - contract.totalSupply(...)
  // - contract.transferFrom(...)
  // - contract.recoverTokens(...)
  // - contract.decimals(...)
  // - contract.etoken2(...)
  // - contract.getPendingVersionTimestamp(...)
  // - contract.purgeUpgrade(...)
  // - contract.optIn(...)
  // - contract.transferFromWithReference(...)
  // - contract.balanceOf(...)
  // - contract.transferToICAP(...)
  // - contract.transferFromToICAP(...)
  // - contract.transferToICAPWithReference(...)
  // - contract._forwardApprove(...)
  // - contract.transferToICAP(...)
  // - contract.transferFromToICAPWithReference(...)
  // - contract.symbol(...)
  // - contract.transferToICAPWithReference(...)
  // - contract._forwardTransferFromToICAPWithReference(...)
  // - contract.transferFromToICAPWithReference(...)
  // - contract.transferFromToICAP(...)
  // - contract.etoken2Symbol(...)
  // - contract.getPendingVersion(...)
  // - contract.transfer(...)
  // - contract.transferWithReference(...)
  // - contract.init(...)
  // - contract.proposeUpgrade(...)
  // - contract.optOut(...)
  // - contract.allowance(...)
  // - contract.getVersionFor(...)
}

export function handleTransfer(event: Transfer): void {
  let transfer1 = new Transferr(event.transaction.hash.toHex())
  transfer1.value =  event.params.value
  transfer1.from = event.params.from
  transfer1.to = event.params.to
  transfer1.value = event.transaction.value
  transfer1.timestamp = event.block.timestamp
  transfer1.save()
}

export function handleApproval(event: Approval): void {
  let approval1 = new Approvall(event.transaction.hash.toHex())
  approval1.value = event.params.value
  approval1.spender = event.params.spender
  approval1.timestamp = event.block.timestamp
  approval1.save()
}
