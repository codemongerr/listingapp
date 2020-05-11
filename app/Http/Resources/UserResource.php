<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $data = parent::toArray($request);
        $objDate = new \DateTime($data['updated_at']);
        return [
            'id' => $data['id'],
            'name' => $data['first_name'] . ' ' . $data['last_name'],
            'email' => $data['email'],
            'updated_at' => $objDate->format('d/m/Y @ H:i'),
            'is_admin' => $data['is_admin'],
        ];
    }
}
