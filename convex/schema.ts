import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    email: v.string(),
    image: v.optional(v.string()),
    name: v.string(),
  }).index("by_email", ["email"]),

  teams: defineTable({
    name: v.string(),
    createdBy: v.string(),
    members: v.array(v.string()),
  }).index("by_name_createdBy", ["name", "createdBy"]),

  
});
