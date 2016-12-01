<?php

use Phpmig\Migration\Migration;

class AddNippoes extends Migration
{
    /**
     * Do the migration
     */
    public function up()
    {
        $container = $this->getContainer();
        $container['db']->query("
            CREATE TABLE nippoes (
                `id` integer NOT NULL AUTO_INCREMENT,
                `content` TEXT NOT NULL,
                `created_at` datetime DEFAULT CURRENT_TIMESTAMP(),
                PRIMARY KEY (`id`)
            );
        ");
    }

    /**
     * Undo the migration
     */
    public function down()
    {
        $container = $this->getContainer();
        $container['db']->query("DROP TABLE nippoes;");
    }
}
